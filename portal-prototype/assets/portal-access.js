(function () {
  'use strict';
  function init(){
    const O=window.PortalOrg, file=decodeURIComponent(location.pathname.split('/').pop()), q=s=>document.querySelector(s);
    const notice=t=>window.toast?window.toast(t):window.Meeting?.toast(t);
    const wrap=(name,fn)=>{const old=window[name];if(typeof old==='function')window[name]=function(...args){return fn(old,args,this);};};
    const prune=()=>{document.querySelectorAll('[onclick*="switchRole"],[onclick*="toggleDemoAuth"]').forEach(n=>n.remove());if(!O.isLeader())document.querySelectorAll('[onclick*="Meeting.submit"],[onclick*="Meeting.pickOutcome"]').forEach(n=>n.remove());};
    if(window.Meeting){['submit','pickOutcome','commitOutcome'].forEach(k=>{const old=Meeting[k];if(typeof old==='function')Meeting[k]=function(...args){if(!O.isLeader()||(file.startsWith('科研开发空间')&&!O.canManageSpace(new URLSearchParams(location.search).get('id')||'1'))){notice('当前账号不能正式提交成果。');return;}return old.apply(this,args);};});}
    if(typeof LOGGED!=='undefined')LOGGED=O.isLogged();
    if(typeof ROLE!=='undefined')ROLE='low';
    if(typeof window.roleName==='function')window.roleName=()=>O.current().name;
    if(typeof window.roleAvatar==='function')window.roleAvatar=()=>O.current().name[0];
    if(typeof window.isHighRole==='function')window.isHighRole=()=>false;
    wrap('renderAuthArea',(old,args,ctx)=>{const r=old.apply(ctx,args);prune();return r;});
    wrap('doLogin',(old,args,ctx)=>{O.select(O.current().id);const r=old.apply(ctx,args);if(typeof LOGGED!=='undefined')LOGGED=true;window.renderAuthArea?.();return r;});
    wrap('doLogout',(old,args,ctx)=>{O.signOut();return old.apply(ctx,args);});
    document.addEventListener('click',ev=>{if(ev.target.closest('[data-bdh-login]')){O.select(O.current().id);if(typeof LOGGED!=='undefined')LOGGED=true;}else if(ev.target.closest('[data-bdh-logout]')){O.signOut();if(typeof LOGGED!=='undefined')LOGGED=false;}},true);
    window.renderAuthArea?.();prune();

    const boardFile='门户-领导数据看板.html',isBoard=file===boardFile;
    const previewStyle=document.createElement('style');previewStyle.textContent=`
      #portalPreview{position:fixed;left:16px;bottom:16px;z-index:900;display:flex;align-items:center;gap:9px;padding:8px 11px;border:1px solid #c9ddd3;border-radius:8px;background:#fff;color:#24584b;box-shadow:0 3px 18px #123c2720;font:12px/1.5 "Microsoft YaHei",sans-serif}
      #portalPreview small{font-size:11px;color:#748a81}#portalPreview label{display:flex;align-items:center;gap:7px;margin:0}#portalPreview select{max-width:195px;height:30px;padding:0 6px;border:1px solid #c9ddd3;border-radius:4px;background:#fff;color:#24584b;font:inherit}
      .pc-demo,[data-portal-board][hidden],[data-portal-board-area][hidden],#portalBoardDenied[hidden]{display:none!important}
      #portalBoardDenied{max-width:780px;margin:70px auto;padding:48px 24px;text-align:center;background:#fff;border:1px solid #dce7df;border-radius:8px}#portalBoardDenied h1{font-size:23px;color:#174c40}#portalBoardDenied p{margin:16px 0;color:#6d8177}#portalBoardDenied button{padding:10px 18px;border:0;border-radius:5px;background:#005653;color:#fff;cursor:pointer;font:inherit}
      body.fullscreen #portalPreview{display:none} @media(max-width:650px){#portalPreview{left:10px;bottom:10px}#portalPreview small{display:none}}@media print{#portalPreview{display:none}}
    `;document.head.append(previewStyle);
    const preview=document.createElement('aside');preview.id='portalPreview';preview.setAttribute('aria-label','原型预览账号');document.body.append(preview);
    function refreshPreview(){const selected=O.isLogged()?O.current().id:'';preview.innerHTML=`<small>原型演示</small><label>预览账号<select id="otPreviewAccount" aria-label="预览账号">${selected?'':'<option value="" selected disabled>请选择账号</option>'}${O.read().accounts.map(a=>`<option value="${O.escape(a.id)}" ${a.id===selected?'selected':''}>${O.escape(a.name)}${a.kind==='admin'?'':' · '+O.roleLabel(a)}</option>`).join('')}</select></label>`;q('#otPreviewAccount').onchange=ev=>{O.select(ev.target.value);location.reload();};}
    window.PortalPreview={refresh:refreshPreview};
    function syncDashboardAccess(){const allowed=!!O.canViewDashboard();document.querySelectorAll('a[href]').forEach(a=>{if(decodeURIComponent(a.getAttribute('href').split(/[?#]/)[0])===boardFile){a.dataset.portalBoard='';a.hidden=!allowed;}});
      if(O.isLogged()){document.querySelectorAll('[data-bdh-login]').forEach(n=>{n.setAttribute('data-bdh-hidden','');n.style.display='none';});window.bdhSyncAuth?.();document.querySelectorAll('.header-actions .bdh-name,.header-actions .username').forEach(n=>n.textContent=O.current().name);document.querySelectorAll('.header-actions .bdh-avatar,.header-actions .avatar').forEach(n=>n.textContent=O.current().name[0]);}
      if(isBoard){const main=q('#dashboard');if(main){main.dataset.portalBoardArea='';main.hidden=!allowed;}let denied=q('#portalBoardDenied');if(!denied){denied=document.createElement('section');denied.id='portalBoardDenied';denied.innerHTML='<h1>当前账号无数据看板访问权限</h1><p>数据看板仅向已授权的管理员账号开放。</p><button type="button" id="previewDashboardAdmin">以管理员身份预览</button>';main.before(denied);q('#previewDashboardAdmin').onclick=()=>{O.select('u-admin');location.reload();};}denied.hidden=allowed;if(!allowed)q('#detailDrawer')?.close();}
      refreshPreview();
    }
    if(isBoard){['openDrawer','showEntity','openRule','downloadCSV','exportDetail'].forEach(name=>wrap(name,(old,args,ctx)=>{if(!O.canViewDashboard()){notice('当前账号无数据看板访问权限。');return;}return old.apply(ctx,args);}));}
    window.addEventListener('portal-account-change',syncDashboardAccess);window.addEventListener('portal-org-change',refreshPreview);syncDashboardAccess();


    if(window.portalSaveApplication){const old=window.portalSaveApplication;window.portalSaveApplication=rec=>{
      if(!O.isLogged()){notice('请先登录。');return null;}
      if(!O.isLeader()&&(/科研|开发/.test(rec.purpose||'')||rec.space)){notice('成员仅可申请模型在线使用，不能申请开发或科研空间。');return null;}
      const team=q('#otResearchTeam');if(/科研|开发/.test(rec.purpose||'')){if(!team||!O.canManageTeam(team.value)){notice('请选择本人负责的团队。');return null;}rec={...rec,teamId:team.value};}
      return old({...rec,applicantId:O.current().id,applicant:O.current().name,usageType:/科研|开发/.test(rec.purpose||'')?'research':'online'});
    };}
    function restrictModelForm(){if(O.isLeader()){configureResearch();return;}const form=q('#modelApplyForm')||q('.application-form');if(!form)return;
      form.querySelector('input[name="purpose"][value="research"]')?.closest('label').remove();
      const biz=form.querySelector('input[name="purpose"][value="biz"]');if(biz)biz.checked=true;
      form.querySelector('#researchFields')?.remove();
      form.querySelector('.purpose-hint')?.remove();
      const note=form.querySelector('#applyScopeNote');if(note)note.textContent='获批后在线使用当前模型。';
      form.querySelectorAll('p').forEach(p=>{if(p.textContent.includes('勾选科研研究'))p.textContent='提交后可在个人中心查看模型使用申请。';});
      const title=q('#dialogTitle');if(title)title.textContent='申请使用模型';
    }
    function configureResearch(){const host=q('#researchFields');if(!host||q('#otResearchTeam'))return;const own=O.myTeams().filter(t=>t.ownerId===O.current().id);host.insertAdjacentHTML('afterbegin',`<label>所属团队<select id="otResearchTeam" name="teamId"><option value="">请选择本人负责的团队</option>${own.map(t=>`<option value="${O.escape(t.id)}">${O.escape(t.name)}</option>`).join('')}</select></label>`);if(!own.length){const cb=q('input[name="purpose"][value="research"]');if(cb){cb.disabled=true;cb.closest('label').title='请先创建本人负责的团队';}}}
    if(file.includes('模型中心-模型')&&!file.includes('运行台')){
      ['openApply','openModelAction'].forEach(name=>wrap(name,(old,args,ctx)=>{if(!O.isLogged()){notice('请先登录后申请使用。');return;}const r=old.apply(ctx,args);restrictModelForm();return r;}));
      wrap('submitDemo',(old,args,ctx)=>{if(!O.isLeader()&&q('input[name="purpose"][value="research"]:checked')){notice('成员不能申请模型开发。');return;}return old.apply(ctx,args);});
      const baseTrial=window.startTrial;if(baseTrial)window.startTrial=function(m){
        if(!O.isLogged()){notice('请先登录后试用。');return;}
        const model=typeof m==='object'?m:(typeof CUR!=='undefined'?CUR:null);if(!model)return;
        if(typeof svcUnpublished==='function'&&svcUnpublished(model)){notice(typeof SVC_MSG!=='undefined'?SVC_MSG:'当前模型暂不可用');return;}
        location.href='模型中心-模型运行台.html?mode=trial#n='+encodeURIComponent(model.name);
      };
    }
    if(!O.isLeader()&&file==='模型中心-模型详情（调整）.html'){const n=document.querySelector('.auth-note');if(n)n.textContent='试用免审批 · 可申请模型在线使用';}
    if(file==='模型中心-模型运行台.html'){
      const trial=new URLSearchParams(location.search).get('mode')==='trial';
      wrap('lockReason',(old,args,ctx)=>{
        if(!O.isLogged())return '请先登录';
        if(typeof isCurVer==='function'&&!isCurVer(CUR))return '历史版本不支持运行';
        if(trial)return '';
        let rows=[];try{rows=JSON.parse(localStorage.getItem('bdh-model-applications-v1')||'[]');}catch{}
        const authorized=rows.some(r=>(r.applicantId||'u-zhang')===O.current().id&&r.name===CUR.name&&['已通过','approved'].includes(r.status));
        return authorized?'':'当前模型尚未取得在线使用授权';
      });
      if(typeof DEMO_AUTH!=='undefined')DEMO_AUTH=trial;
      window.renderAll?.();window.syncLock?.();prune();
    }
    if(file.startsWith('数据中心')){
      wrap('renderCtx',(old,args,ctx)=>{const r=old.apply(ctx,args);if(!O.isLeader())document.querySelectorAll('.ctx-all').forEach(n=>n.remove());return r;});window.renderCtx?.();window.renderAll?.();prune();
      if(!O.isLeader()){
        document.querySelectorAll('[onclick*="applyZoneAll"]').forEach(b=>{b.disabled=true;b.title='数据由负责人为科研空间申请';});
        wrap('renderZoneList',(old,args,ctx)=>{const r=old.apply(ctx,args);document.querySelectorAll('[onclick*="applyZoneAll"]').forEach(b=>{b.disabled=true;b.title='数据由负责人为科研空间申请';});return r;});
      }
      if(typeof applyBtnHtml==='function'){wrap('applyBtnHtml',(old,args,ctx)=>O.isLeader()?old.apply(ctx,args):'<button class="btn-apply" disabled title="数据在科研空间内使用，由负责人申请">由负责人申请</button>');window.renderHeadRight?.();prune();}
    }
    if(file==='科研开发空间-交互原型(10).html'){
      const all=spaces.slice(),scope=new URLSearchParams(location.search).get('team');
      spaces=all.filter(s=>O.canViewSpace(s.id)&&(!scope||O.spaceTeam(s.id)?.id===scope)).map(s=>({...s,team:O.spaceTeam(s.id).name,role:O.canManageSpace(s.id)?'负责人':'成员'}));
      permission=O.isLeader()?'owner':'member';if(!O.isLeader()||!O.myTeams().some(t=>t.ownerId===O.current().id))todos=[];
      const btn=q('#apply');if(btn)btn.hidden=!O.isLeader();
      const oldApply=window.apply;window.apply=function(){
        if(!O.isLeader()){notice('科研空间和算力由负责人申请。');return;}
        const own=O.myTeams().filter(t=>t.ownerId===O.current().id);if(!own.length){notice('请先在个人中心创建团队。');return;}
        oldApply();const select=q('#application-team');if(select)select.innerHTML=own.map(t=>`<option value="${O.escape(t.name)}" data-id="${t.id}">${O.escape(t.name)}</option>`).join('');
        const form=q('#apply-form'),submit=form?.onsubmit;
        if(form&&submit)form.onsubmit=function(ev){if(!O.isLeader()||!O.canManageTeam(select.selectedOptions[0]?.dataset.id)){ev.preventDefault();notice('当前账号不能为该团队申请空间。');return;}const before=new Set(spaces.map(s=>String(s.id)));const r=submit.call(this,ev);const added=spaces.filter(s=>!before.has(String(s.id)));if(added.length){const db=O.read(),t=db.teams.find(t=>t.id===select.selectedOptions[0].dataset.id);t.spaceIds=[...new Set([...(t.spaceIds||[]),...added.map(s=>String(s.id))])];localStorage.setItem(O.KEY,JSON.stringify(db));}return r;};
      };if(btn)btn.onclick=window.apply;
      window.render();
    }
    if(file==='科研开发空间-详情页(9).html'||file==='科研开发空间-IDE编辑页.html'){
      const id=new URLSearchParams(location.search).get('id')||'1';
      if(!O.canViewSpace(id)){
        const main=document.querySelector('main')||document.querySelector('.app');if(main)main.innerHTML='<section style="padding:72px;text-align:center;background:white"><h2>当前账号无权访问该科研空间</h2><p style="margin:18px">请从已加入团队的科研空间进入。</p><a href="个人中心-高保真原型.html#teams">返回我的团队</a></section>';
        ['renderAll','enterEnvironment','openFile','submitResult','mountResources','manageMembers','archiveSpace','startInstance','stopInstance','submitRun'].forEach(name=>{if(typeof window[name]==='function')window[name]=()=>notice('当前账号无权访问该科研空间。');});
      }else if(file==='科研开发空间-详情页(9).html'){
        space.role=O.canManageSpace(id)?'负责人':'成员';space.team=O.spaceTeam(id).name;
        window.renderMembers=function(){const t=O.spaceTeam(id);members=O.spaceMembers(id).map(accountId=>{const a=O.account(accountId);return {id:a.id,name:a.name,role:a.id===t.ownerId?'负责人':'成员',note:a.kind==='leader'&&a.id!==t.ownerId?'受邀负责人':'团队协作'};});q('#member-count').textContent=members.length+' 人';q('#members').innerHTML=members.map(m=>`<div class="member-row"><span class="member-avatar">${O.escape(m.name[0])}</span><span class="member-name">${O.escape(m.name)}${m.id===O.current().id?'（我）':''}<small>${m.note}</small></span><span class="role ${m.role==='成员'?'member':''}">${m.role}</span></div>`).join('');};
        window.manageMembers=function(){if(!O.canManageSpace(id)||!canManage())return;const t=O.spaceTeam(id),selected=O.spaceMembers(id);openDialog('管理协作成员',`<form id="otSpaceMembers"><div class="modal-body"><p class="hint">从本团队成员中选择科研空间协作人员。</p>${t.memberIds.map(accountId=>{const a=O.account(accountId);return `<label class="file-choice"><input type="checkbox" name="memberIds" value="${a.id}" ${selected.includes(a.id)?'checked':''} ${a.id===t.ownerId?'disabled':''}>${O.escape(a.name)}${a.id===t.ownerId?' · 团队负责人':''}</label>`;}).join('')}</div>${formFooter('保存成员')}</form>`);q('#otSpaceMembers').onsubmit=ev=>{ev.preventDefault();try{O.setSpaceMembers(id,new FormData(ev.target).getAll('memberIds'));closeModal();window.renderMembers();notice('空间成员已保存');}catch(e){notice(e.message);}};};
        window.renderAll();const old=window.renderHeading;window.renderHeading=function(){old();document.querySelectorAll('.heading-meta b').forEach(b=>{if(b.textContent==='张三')b.textContent=O.account(O.spaceTeam(id).ownerId).name;});};window.renderHeading();
      }
    }

  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
