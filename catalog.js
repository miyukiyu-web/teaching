(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const data = window.TEACHING_COURSES || {subjects:[],shortcuts:[]};
  const content = $('#catalog-content'), tabs = $('#subject-tabs'), search = $('#course-search'), expand = $('#expand-chapters');
  let selected = data.subjects[0]?.id || '', expanded = false;
  const el = (tag,text,cls) => { const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(cls)n.className=cls; return n; };
  const valid = url => typeof url==='string' && /^https?:\/\/[^\s]+$/i.test(url);
  const resources = unit => (Array.isArray(unit.resources)?unit.resources:[]).filter(r=>r&&valid(r.url));
  const units = subject => (subject.chapters||[]).flatMap(c=>c.units||[]);
  const countLinks = list => list.reduce((n,u)=>n+(valid(u.url)?1:0)+resources(u).length,0);
  function link(name,url,cls) { const a=el('a',name,cls); a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; return a; }
  (data.shortcuts||[]).filter(r=>valid(r.url)).forEach(r=>$('#home-shortcuts').append(link(r.name,r.url)));
  function drawTabs() {
    tabs.replaceChildren();
    data.subjects.forEach(subject=>{
      const b=el('button',undefined,'subject-button'+(selected===subject.id?' active':''));
      b.type='button';b.setAttribute('aria-pressed',String(selected===subject.id));b.setAttribute('aria-controls','catalog-content');
      b.append(el('span',subject.code,'subject-icon'),el('span',subject.name,'subject-name'),el('span',subject.chapters.length?String(subject.chapters.length).padStart(2,'0')+' CHAPTERS':'即將開課','subject-state'));
      b.onclick=()=>{selected=subject.id;search.value='';expanded=false;drawTabs();render();};tabs.append(b);
    });
  }
  function render() {
    const subject=data.subjects.find(s=>s.id===selected);if(!subject)return;
    const all=units(subject), q=search.value.trim().toLocaleLowerCase();
    $('#subject-code').textContent=subject.code+' / LEARNING PATH';$('#subject-title').textContent=subject.name;$('#subject-description').textContent=subject.description;
    const metrics=$('#subject-metrics');metrics.replaceChildren();
    [[subject.chapters.length,'章節'],[all.length,'學習單元'],[countLinks(all),'教材連結']].forEach(([n,label])=>{const m=el('div',undefined,'metric');m.append(el('b',String(n).padStart(2,'0')),el('span',label));metrics.append(m);});
    search.disabled=!subject.chapters.length;expand.hidden=!subject.chapters.length;
    expand.textContent=expanded?'收合全部章節 −':'展開全部章節 ＋';
    content.replaceChildren();let shown=0,shownUnits=0;
    subject.chapters.forEach(chapter=>{
      const chapterMatch=(chapter.id+' '+chapter.title+' '+chapter.description).toLocaleLowerCase().includes(q);
      const matched=(chapter.units||[]).filter(u=>!q||chapterMatch||(u.id+' '+u.title+' '+resources(u).map(r=>r.name).join(' ')).toLocaleLowerCase().includes(q));
      if(!matched.length)return;shown++;shownUnits+=matched.length;
      const d=el('details',undefined,'chapter-card');d.open=expanded||!!q;
      const summary=el('summary');const top=el('div',undefined,'chapter-top');top.append(el('span','CHAPTER '+String(chapter.id).padStart(2,'0'),'chapter-number'),el('span','＋','chapter-toggle'));
      const meta=el('div',undefined,'chapter-meta'), n=countLinks(chapter.units||[]);meta.append(el('span',(chapter.units||[]).length+' 個單元'),el('span',n?n+' 份教材':'教材待補',n?'ready':''));
      summary.append(top,el('h4',chapter.title),el('p',chapter.description),meta);d.append(summary);
      const list=el('ul',undefined,'unit-list');matched.forEach(u=>{const li=el('li',undefined,'unit-item'),heading=el('div',undefined,'unit-heading');heading.append(el('span',u.id,'unit-id'),valid(u.url)?link(u.title,u.url,'unit-name'):el('span',u.title,'unit-name'));li.append(heading);const rr=resources(u);if(rr.length){const links=el('div',undefined,'resource-links');rr.forEach(r=>{const a=link(r.name,r.url);a.append(el('span','↗'));links.append(a);});li.append(links);}else if(!valid(u.url))li.append(el('span','教材準備中','unit-pending'));list.append(li);});d.append(list);content.append(d);
    });
    $('#course-count').textContent=subject.chapters.length?(q?'找到 '+shown+' 章・'+shownUnits+' 個單元':'共 '+subject.chapters.length+' 章・'+all.length+' 個學習單元 · 點選章節查看內容'):'課程內容將陸續上架';
    if(!shown){const empty=el('div',undefined,'course-empty');empty.append(el('div',q?'⌕':'{ '+subject.code+' }','empty-code'),el('h4',q?'沒有符合的單元':'課程即將開放'),el('p',q?'請換個關鍵字，或清除搜尋後查看完整章節。':'這門課的章節與教材正在規劃中，敬請期待。'));content.append(empty);}
  }
  search.oninput=render;expand.onclick=()=>{expanded=!expanded;render();};drawTabs();render();
})();
