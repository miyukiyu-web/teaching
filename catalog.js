(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const status = $('#catalog-status'), subjects = $('#subject-tabs'), content = $('#catalog-content');
  const search = $('#course-search'), refresh = $('#catalog-refresh');
  let catalog = {subjects:[], courses:[]}, selected = '', requestId = 0;
  let endpoint = window.COURSE_API_URL || '';
  try { endpoint = endpoint || localStorage.getItem('miyuki-course-api') || ''; } catch (_) {}
  const input = $('#api-url'); input.value = endpoint;
  const nativeGas = !!(window.google && google.script && google.script.run);
  if (nativeGas) $('#connection-settings').hidden = true;
  // 現有 GAS 回傳完整課程頁面，直接嵌入，沿用原本的試算表讀取。
  if (!nativeGas && window.COURSE_SOURCE_MODE === 'embed' && window.COURSE_API_URL) {
    $('#connection-settings').hidden = true;
    $('#catalog-warnings').hidden = true;
    $('.search-label').hidden = true;
    subjects.hidden = true;
    $('#course-count').hidden = true;
    const frame = document.createElement('iframe');
    frame.title = 'Miyuki 老師的試算表課程目錄';
    frame.className = 'gas-course-frame';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const source = window.COURSE_API_URL;
    const help = document.createElement('p');
    help.className = 'catalog-frame-help';
    help.append('若課程未顯示或需要登入，請');
    const open = document.createElement('a');
    open.href = source; open.target = '_blank'; open.rel = 'noopener noreferrer';
    open.textContent = '另開課程目錄 ↗';
    help.append(open);
    content.replaceChildren(frame, help);
    status.textContent = '正在開啟 Google 試算表課程目錄…';
    frame.onload = () => { status.textContent = '課程由 Google 試算表提供；修改資料後，按「重新讀取」更新。'; };
    frame.onerror = () => { status.textContent = '課程目錄無法顯示，請使用下方連結另開查看。'; };
    refresh.onclick = () => {
      status.textContent = '正在重新開啟課程目錄…';
      const next = new URL(source); next.searchParams.set('_refresh', String(Date.now()));
      frame.src = next.href;
    };
    frame.src = source;
    return;
  }

  const el = (tag, text, cls) => { const n = document.createElement(tag); if(text !== undefined) n.textContent=text; if(cls)n.className=cls; return n; };
  function normalize(raw) {
    if(raw && raw.ok === false) throw new Error(raw.message || '讀取課程失敗。');
    const rows = Array.isArray(raw) ? raw : raw && raw.courses;
    if(!Array.isArray(rows)) throw new Error('課程資料格式不符，請更新 Code.gs 並重新部署。');
    const names = !Array.isArray(raw) && Array.isArray(raw.subjects) ? raw.subjects : [];
    const all = [...names, ...rows.map(c => c.subject)].map(String).map(s=>s.trim()).filter(Boolean);
    const valid = rows.filter(c => c && typeof c.url==='string' && /^https?:\/\/[^\s]+$/i.test(c.url) && String(c.name||'').trim()).map(c=>({subject:String(c.subject||'').trim(),name:String(c.name).trim(),url:c.url,unit:String(c.unit||'未分類單元').trim()||'未分類單元',note:String(c.note||'')}));
    return {subjects:[...new Set(all)],courses:valid,warnings:raw.warnings||[]};
  }
  function render() {
    subjects.replaceChildren();
    catalog.subjects.forEach(subject => {
      const count = catalog.courses.filter(c=>c.subject===subject).length;
      const b = el('button',subject+' · '+count,subject===selected?'active':'');
      b.type='button'; b.setAttribute('aria-pressed',String(subject===selected));
      b.onclick=()=>{selected=subject;render();}; subjects.append(b);
    });
    content.replaceChildren();
    const q=search.value.trim().toLocaleLowerCase();
    const rows=catalog.courses.filter(c=>c.subject===selected && (c.name+' '+c.unit+' '+c.note).toLocaleLowerCase().includes(q));
    $('#course-count').textContent=selected ? selected+' / '+rows.length+' 門課程' : '尚無科目';
    if(!rows.length){content.append(el('p',q?'找不到符合的課程，請試試其他關鍵字。':'此科目尚無課程連結。','catalog-empty'));return;}
    if(selected==='首頁'){
      const list=el('div',undefined,'home-links');
      rows.forEach(c=>{const a=el('a');a.href=c.url;a.target='_blank';a.rel='noopener noreferrer';a.append(el('span',c.name),el('span','↗'));list.append(a);});
      content.append(list);return;
    }
    const groups=new Map();rows.forEach(c=>{if(!groups.has(c.unit))groups.set(c.unit,[]);groups.get(c.unit).push(c);});
    groups.forEach((items,unit)=>{
      const group=el('div',undefined,'unit-group');group.append(el('h3',unit,'unit-title'));
      const list=el('div',undefined,'course-list');
      items.forEach(c=>{const a=el('a',undefined,'course-link');a.href=c.url;a.target='_blank';a.rel='noopener noreferrer';const label=el('div');label.append(el('strong',c.name));if(c.note)label.append(el('p',c.note));a.append(label,el('span','↗'));list.append(a);});
      group.append(list);content.append(group);
    });
  }
  function jsonp(url) {
    return new Promise((resolve,reject)=>{
      const cb='miyukiCourses_'+Date.now()+'_'+Math.floor(Math.random()*1e6), script=document.createElement('script');
      const target=new URL(url);target.searchParams.set('action','courses');target.searchParams.set('callback',cb);target.searchParams.set('_',String(Date.now()));
      const finish=(error,data)=>{clearTimeout(timer);script.remove();delete window[cb];error?reject(error):resolve(data);};
      const timer=setTimeout(()=>finish(new Error('連線逾時，請確認 GAS 已部署為可存取的網頁應用程式。')),25000);
      window[cb]=data=>finish(null,data);script.onerror=()=>finish(new Error('連線失敗，請確認部署網址與存取權限。'));script.src=target.href;document.head.append(script);
    });
  }
  async function load() {
    const id=++requestId; refresh.disabled=true;search.disabled=true;subjects.replaceChildren();content.replaceChildren();content.setAttribute('aria-busy','true');$('#catalog-warnings').hidden=true;status.textContent='正在讀取試算表課程…';
    try {
      let raw;
      if(nativeGas) raw=await new Promise((resolve,reject)=>{let done=false;const timer=setTimeout(()=>{done=true;reject(new Error('讀取逾時，請稍後重試。'));},25000);google.script.run.withSuccessHandler(data=>{if(!done){clearTimeout(timer);resolve(data);}}).withFailureHandler(error=>{if(!done){clearTimeout(timer);reject(error);}}).getCourseCatalog();});
      else if(endpoint) raw=await jsonp(endpoint);
      else {catalog={subjects:[],courses:[]};status.textContent='尚未連結試算表。請透過下方「教材連線設定」填入 GAS 部署網址，或使用完整 GAS 版。';$('#course-count').textContent='等待連結課程資料';return;}
      if(id!==requestId)return;
      catalog=normalize(raw);if(!catalog.subjects.includes(selected))selected=catalog.subjects.includes('首頁')?'首頁':catalog.subjects[0]||'';
      render();status.textContent='已更新課程資料 · '+new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'})+(catalog.warnings.length?' · '+catalog.warnings.length+' 項資料提醒':'');
      const warnings=$('#catalog-warnings');warnings.replaceChildren(el('summary','資料提醒'));warnings.hidden=!catalog.warnings.length;catalog.warnings.forEach(w=>warnings.append(el('p',String(w))));
    }catch(error){if(id!==requestId)return;status.textContent=error.message||'無法讀取課程，請稍後重試。';$('#course-count').textContent='課程連線未完成';catalog={subjects:[],courses:[]};$('#catalog-warnings').hidden=true;}
    finally{if(id===requestId){refresh.disabled=false;search.disabled=!catalog.subjects.length;content.setAttribute('aria-busy','false');}}
  }
  $('#connection-form').onsubmit=e=>{e.preventDefault();const value=input.value.trim();if(value&&!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(value)){$('#connection-message').textContent='請輸入 https://script.google.com/macros/s/…/exec 格式的正式部署網址。';return;}endpoint=value;try{localStorage.setItem('miyuki-course-api',value);}catch(_){}$('#connection-message').textContent='已套用至這台瀏覽器。若需讓所有訪客使用，請將網址提供給網站管理者設定。';load();};
  refresh.onclick=load;search.oninput=render;
  load();
})();
