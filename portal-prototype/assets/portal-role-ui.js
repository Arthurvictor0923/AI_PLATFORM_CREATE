(function () {
  'use strict';
  const accounts = window.PrototypeAccounts;
  const name = decodeURIComponent(location.pathname.split('/').pop());
  const board = '门户-领导数据看板.html';
  const personal = name === '个人中心-高保真原型.html';

  function sync() {
    const org = window.PortalOrg;
    accounts.mountPortalPicker();
    const code = accounts.portalCode();
    const boardAllowed = org.canViewDashboard();
    const active = accounts.portalAccount();
    for (const login of document.querySelectorAll('header [data-bdh-login]')) {
      if (active) {
        login.setAttribute('data-bdh-hidden','');
        login.style.display = 'none';
      } else if (login.hasAttribute('data-bdh-hidden')) {
        login.removeAttribute('data-bdh-hidden');
        login.style.display = '';
      }
    }
    if (active) document.querySelectorAll('header .bdh-name,header .username').forEach(element=>{
      if (element.textContent !== active.name) element.textContent = active.name;
    });
    window.bdhSyncAuth?.();
    for (const nav of document.querySelectorAll('header .main-nav,header .prototype-mobile')) {
      if (!nav.querySelector('a[data-portal-board],a[href*="门户-领导数据看板"]')) {
        const link = document.createElement('a');
        link.href = board;
        link.textContent = '数据看板';
        link.dataset.portalBoard = '';
        const about = Array.from(nav.querySelectorAll('a')).find(item=>item.textContent.trim()==='关于平台');
        nav.insertBefore(link,about || null);
      }
    }
    document.querySelectorAll('a[href]').forEach(link=>{
      const href = link.getAttribute('href');
      if (href && decodeURIComponent(href.split(/[?#]/)[0]).endsWith(board)) {
        link.dataset.portalBoard = '';
        accounts.hide(link,!boardAllowed);
      }
    });

    if (name === board) {
      const canExport = code === 'R1';
      for (const id of ['exportSummary','drawerExport']) accounts.hide(document.getElementById(id),!canExport);
    }
    if (name.startsWith('需求中心') || personal) {
      const demandMode = accounts.grant('demand');
      document.querySelectorAll('#publishBtn,#need-publish,[data-new-demand],[data-ot="new-demand"],[data-demand-edit]').forEach(button=>
        accounts.hide(button,demandMode === 'deny')
      );
      if (accounts.portalReadOnly()) {
        document.querySelectorAll('[data-demand-withdraw],#contactButton').forEach(button=>accounts.hide(button,true));
      }
    }
    if (name.startsWith('科研开发空间-交互')) {
      const mode = org.isLeader() ? accounts.grant('space') : 'deny';
      const request = document.getElementById('apply');
      accounts.hide(request,mode === 'deny');
      const label = mode === 'direct' ? '创建科研空间' : '申请科研空间';
      if (request && request.textContent.trim() !== label) request.textContent = label;
    }
    if (name.startsWith('数据中心')) {
      const dataMode = org.isLeader() ? accounts.grant('data') : 'deny';
      document.querySelectorAll('[onclick*="applyZoneAll"]').forEach(button=>accounts.hide(button,dataMode === 'deny'));
    }
    if (personal) {
      const research = ['R4','R5'].includes(code);
      const allowed = {
        teams:research, projects:research, spaces:research, outcomes:org.isLeader(),
        data:research, models:['R4','R5','R6'].includes(code), demands:['R4','R5','R6'].includes(code),
      };
      for (const [page,visible] of Object.entries(allowed)) {
        document.querySelectorAll('[data-nav="'+page+'"]').forEach(button=>accounts.hide(button,!visible));
      }
      accounts.hide(document.querySelector('#otProfileForm button[type="submit"]'),accounts.portalReadOnly());
      const page = location.hash.slice(1).split('?')[0];
      const canonical = {team:'teams',project:'projects'}[page] || page;
      if (allowed[canonical] === false) location.hash = 'overview';
    }
  }

  function init() {
    const org = window.PortalOrg;
    if (!org) return;
    if (personal && !org.isLogged()) { location.replace('index.html'); return; }
    window.PortalPreview = {refresh:accounts.mountPortalPicker};
    sync();
    let pending = false;
    const observer = new MutationObserver(()=>{
      if (pending) return;
      pending = true;
      requestAnimationFrame(()=>{
        pending = false;
        // The account selector owns its own changes. Do not rebuild it when content rerenders.
        refreshEntries();
      });
    });
    function refreshEntries() {
      observer.disconnect();
      sync();
      observer.observe(document.body,{childList:true,subtree:true});
    }
    observer.observe(document.body,{childList:true,subtree:true});
    window.addEventListener('hashchange',refreshEntries);
    window.addEventListener('portal-account-change',refreshEntries);
    window.addEventListener('storage',event=>{
      if (event.key === org.SESSION || event.key === accounts.settingsKey) location.reload();
    });
    if (personal || name === board || name.startsWith('需求中心')) {
      window.addEventListener('click',event=>{
        const target = event.target.closest?.('[data-role-hidden]');
        if (target) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },true);
    }
    if (personal && accounts.portalReadOnly()) {
      window.addEventListener('submit',event=>{
        if (event.target.id !== 'otProfileForm') return;
        event.preventDefault();
        event.stopImmediatePropagation();
      },true);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();

