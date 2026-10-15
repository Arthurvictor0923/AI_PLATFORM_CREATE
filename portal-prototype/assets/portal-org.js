/* 2026-10-14: local prototype data. Production identity and authorization require server checks. */
(function () {
  'use strict';
  const KEY = 'bdh-owner-teams-20261014', SESSION = 'bdh-portal-account-20261014';
  const org = '黑龙江省农业科学院';
  const adminDemo = {id:'u-admin',name:'平台管理员',login:'admin.demo',kind:'admin',orgId:'org-platform',org:'平台管理',ownerId:null,permissions:['dashboard:view']};
  const seed = {
    schema: 1,
    accounts: [
      adminDemo,
      {id:'u-zhang',name:'张研究员',login:'zhang.research',kind:'leader',orgId:'org-hla',org,ownerId:null},
      {id:'u-li',name:'李晓',login:'li.xiao',kind:'member',orgId:'org-hla',org,ownerId:'u-zhang'},
      {id:'u-wang',name:'王宁',login:'wang.ning',kind:'member',orgId:'org-hla',org,ownerId:'u-zhang'},
      {id:'u-zhao',name:'赵晨',login:'zhao.chen',kind:'member',orgId:'org-hla',org,ownerId:'u-zhang'},
      {id:'u-chen',name:'陈老师',login:'chen.research',kind:'leader',orgId:'org-hla',org,ownerId:null},
      {id:'u-sun',name:'孙悦',login:'sun.yue',kind:'member',orgId:'org-hla',org,ownerId:'u-chen'},
      {id:'u-liu',name:'刘老师',login:'liu.research',kind:'leader',orgId:'org-hla',org,ownerId:null}
    ],
    teams: [
      {id:'t-rice',name:'寒地水稻研究团队',ownerId:'u-zhang',orgId:'org-hla',org,description:'多源遥感与作物监测方法研究',memberIds:['u-zhang','u-li','u-wang'],spaceIds:['1','2','5','7']},
      {id:'t-disaster',name:'农业灾害研究团队',ownerId:'u-zhang',orgId:'org-hla',org,description:'农田旱情与土壤墒情研究',memberIds:['u-zhang','u-li'],spaceIds:['3','4']},
      {id:'t-yield',name:'粮食产量研究团队',ownerId:'u-chen',orgId:'org-hla',org,description:'区域作物产量分析与验证',memberIds:['u-chen','u-sun','u-zhang'],spaceIds:['6']}
    ],
    invitations: []
  };
  const clone = x => JSON.parse(JSON.stringify(x));
  function read() {try {const s=JSON.parse(localStorage.getItem(KEY));if(s?.schema===1&&Array.isArray(s.accounts)&&Array.isArray(s.teams))return s;}catch{}return clone(seed);}
  function save(s) {try {localStorage.setItem(KEY,JSON.stringify(s));}catch {throw Error('保存失败，请检查浏览器存储后重试。');}window.dispatchEvent(new CustomEvent('portal-org-change'));}
  if(!localStorage.getItem(KEY))save(clone(seed));
  const existing=read();if(!existing.accounts.some(a=>a.id===adminDemo.id)){existing.accounts.push(clone(adminDemo));save(existing);}
  function current() {const s=read();return s.accounts.find(a=>a.id===localStorage.getItem(SESSION))||s.accounts.find(a=>a.id==='u-zhang')||s.accounts[0];}
  const newId = p => p+'-'+(crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2));
  function leader() {const a=current();if(a.kind!=='leader')throw Error('仅负责人可以管理成员账号和创建团队。');return a;}
  function managedTeam(s,id) {const t=s.teams.find(t=>t.id===id);if(!t||t.ownerId!==current().id)throw Error('仅当前团队负责人可以管理该团队。');return t;}
  function memberEligible(t,a) {return !!a&&a.orgId===t.orgId&&a.kind==='member'&&a.ownerId===t.ownerId;}
  const O = window.PortalOrg = {
    KEY, SESSION, read, current,
    isLogged:()=>!!localStorage.getItem(SESSION),
    signOut:()=>{localStorage.removeItem(SESSION);window.dispatchEvent(new CustomEvent('portal-account-change'));},
    account:id=>read().accounts.find(a=>a.id===id),
    team:id=>read().teams.find(t=>t.id===id),
    isLeader:()=>current().kind==='leader',
    canViewDashboard:()=>!!localStorage.getItem(SESSION)&&current().kind==='admin'&&current().permissions?.includes('dashboard:view'),
    roleLabel:a=>a.kind==='admin'?'管理员':a.kind==='leader'?'负责人':'成员',
    myTeams:()=>read().teams.filter(t=>t.memberIds.includes(current().id)),
    managedAccounts:()=>read().accounts.filter(a=>a.kind==='member'&&a.ownerId===current().id),
    canViewTeam:id=>!!read().teams.find(t=>t.id===id&&t.memberIds.includes(current().id)),
    canManageTeam:id=>!!read().teams.find(t=>t.id===id&&t.ownerId===current().id),
    spaceTeam:id=>read().teams.find(t=>(t.spaceIds||[]).includes(String(id))),
    spaceMembers(id) {const s=read(),t=this.spaceTeam(id);return t?t.memberIds.filter(a=>(s.spaceMembers?.[String(id)]||t.memberIds).includes(a)):[];},
    canViewSpace(id) {const t=this.spaceTeam(id);return !!t&&this.canViewTeam(t.id)&&this.spaceMembers(id).includes(current().id);},
    setSpaceMembers(id,ids) {const s=read(),t=this.spaceTeam(id);if(!t||!this.canManageSpace(id))throw Error('仅本团队负责人可以管理空间成员。');if(ids.some(a=>!t.memberIds.includes(a)))throw Error('只能选择当前团队成员。');s.spaceMembers??={};s.spaceMembers[String(id)]=[...new Set([t.ownerId,...ids])];save(s);},
    canManageSpace(id) {const t=this.spaceTeam(id);return !!t&&this.canManageTeam(t.id);},
    select(id) {if(!read().accounts.some(a=>a.id===id))throw Error('账号不存在。');localStorage.setItem(SESSION,id);window.dispatchEvent(new CustomEvent('portal-account-change'));},
    createMember(fields) {
      const a=leader(),s=read(),name=String(fields.name||'').trim(),login=String(fields.login||'').trim();
      if(!name||!login)throw Error('请填写姓名和登录账号。');
      if(/\s/.test(login))throw Error('登录账号不能包含空格。');
      if(s.accounts.some(x=>x.login.toLowerCase()===login.toLowerCase()))throw Error('登录账号已存在，请使用其他账号；已有成员无需重复创建。');
      if(!String(fields.password||'').trim())throw Error('请填写初始密码。');
      const member={id:newId('u'),name,login,kind:'member',orgId:a.orgId,org:a.org,ownerId:a.id};
      s.accounts.push(member);save(s);return member; // Password is deliberately not stored by this prototype.
    },
    updateProfile(name) {const s=read(),a=s.accounts.find(x=>x.id===current().id);if(!String(name).trim())throw Error('请填写姓名。');a.name=String(name).trim();save(s);},
    editMember(id,name) {leader();const s=read(),a=s.accounts.find(a=>a.id===id&&a.ownerId===current().id&&a.kind==='member');if(!a)throw Error('只能维护自己关联的成员账号。');if(!String(name).trim())throw Error('请填写姓名。');a.name=String(name).trim();save(s);},
    createTeam(fields) {const a=leader(),s=read(),name=String(fields.name||'').trim();if(!name)throw Error('请填写团队名称。');const t={id:newId('t'),name,description:String(fields.description||'').trim(),orgId:a.orgId,org:a.org,ownerId:a.id,memberIds:[a.id],spaceIds:[]};s.teams.push(t);save(s);return t;},
    addMembers(id,ids) {const s=read(),t=managedTeam(s,id);if(!ids.length)throw Error('请选择要添加的成员。');if(ids.some(id=>!memberEligible(t,s.accounts.find(a=>a.id===id))))throw Error('只能添加本机构且归属当前负责人的普通成员。');t.memberIds=[...new Set([...t.memberIds,...ids])];save(s);},
    removeMember(id,accountId) {const s=read(),t=managedTeam(s,id);if(accountId===t.ownerId)throw Error('不能移除团队负责人。');t.memberIds=t.memberIds.filter(x=>x!==accountId);save(s);},
    invite(id,accountId) {
      const s=read(),t=managedTeam(s,id),a=s.accounts.find(a=>a.id===accountId);
      if(!a||a.kind!=='leader'||a.orgId!==t.orgId||a.id===current().id)throw Error('只能邀请本机构已有的独立负责人。');
      if(t.memberIds.includes(a.id))throw Error('该负责人已加入当前团队。');
      if(s.invitations.some(i=>i.teamId===id&&i.to===accountId&&i.status==='pending'))throw Error('邀请已发出，请等待对方回应。');
      const i={id:newId('inv'),teamId:id,from:current().id,to:accountId,status:'pending',time:new Date().toLocaleString('zh-CN')};s.invitations.push(i);save(s);return i;
    },
    answer(id,decision) {
      const s=read(),i=s.invitations.find(x=>x.id===id),a=current();if(!i||i.to!==a.id||i.status!=='pending')throw Error('该邀请已处理或不属于当前账号。');
      if(!['accepted','declined'].includes(decision))throw Error('无效操作。');
      const t=s.teams.find(t=>t.id===i.teamId);if(!t||a.kind!=='leader'||a.orgId!==t.orgId)throw Error('当前账号不符合团队邀请条件。');
      if(decision==='accepted')t.memberIds=[...new Set([...t.memberIds,a.id])];i.status=decision;i.processedAt=new Date().toISOString();save(s);
    },
    cancelInvite(id) {const s=read(),i=s.invitations.find(x=>x.id===id);if(!i||i.status!=='pending')throw Error('邀请已处理。');managedTeam(s,i.teamId);i.status='cancelled';save(s);},
    escape:v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
  };
  if(decodeURIComponent(location.pathname).includes('个人中心')&&!O.isLogged())O.select('u-zhang');
})();
