/* SurgRead dual WHO textbook guide.
   Pair: Basic Epidemiology 2e English WHO 2006 + official Arabic translation WHO EMRO 2008.
   Numbers in MAP are the book's PRINTED pages (checked against their TOCs).
   Arabic PDF page = printed+19, verified at print pages 54,110,197.
   English PDF page = printed+12, approximate due to inaccessible preview in this environment.
   Where text is only a background overview, it is labeled—not misrepresented as full coverage. */
(()=>{
"use strict";
const BASE_AR='https://applications.emro.who.int/dsaf/dsa970.pdf';
const BASE_EN='https://iris.who.int/bitstream/handle/10665/43541/9241547073_eng.pdf?sequence=1';
const MAP=[
['c01',177,133,'الوبائيات السريرية','Clinical epidemiology','background','PICO ليس مشروحًا بوصفه إطارًا مستقلًا في الطبعة الثانية.'],
['c02',111,83,'التسبب في الوبائيات','Causation in epidemiology','background','مصطلح Estimand الحديث لا تغطيه الطبعة.'],
['c03',177,133,'الوبائيات السريرية','Clinical epidemiology','background','هذا مدخل للقراءة النقدية، وليس شرحًا لبنية IMRaD.'],
['c04',85,63,'المفاهيم والأدوات الإحصائية','Basic biostatistics','background','الأمثلة القياسية فقط، لا جميع أنواع endpoints.'],
['c05',68,50,'التجارب العشوائية ذات الشواهد','Randomized controlled trials','direct','لا يشرح جميع تفاصيل ITT أو إخفاء التخصيص الحديثة.'],
['c06',69,51,'التجارب المجتمعية','Community trials','background','التجارب المتقاطعة والواقعية Pragmatic ليست مغطاة بالكامل.'],
['c07',63,46,'الدراسات الأترابية','Cohort studies','direct','تحيز الزمن المخلّد Immortal time bias ليس مفصّلًا.'],
['c08',61,44,'دراسات الحالات والشواهد','Case-control studies','direct','اختيار الشواهد والتفسير الأساسي.'],
['c09',59,44,'دراسات المقطع العرضي','Cross-sectional studies','direct','الانتشار وحدود تفسير السببية.'],
['c10',55,42,'الدراسات الوصفية','Descriptive studies','background','السلاسل والتقارير الجراحية تُذكر كتصميم وصفي عام.'],
['c11',182,136,'الاختبارات التشخيصية','Diagnostic tests','direct','مفاهيم الاختبار المرجعي وحساب الدقة.'],
['c12',183,137,'الإنذار والسيرة الطبيعية','Natural history and prognosis','background','TRIPOD ونماذج التنبؤ الحديثة لا تغطيها الطبعة.'],
['c13',108,81,'التحليل التلوي','Meta-analysis','background','يقدم المفهوم الإحصائي، وليس إرشادات PRISMA الحالية.'],
['c14',null,null,null,null,'none','تحسين الجودة والبحث النوعي ليسا موضوعين مستقلين في المرجعين.'],
['c15',45,42,'المقارنات المطلقة','Measures of association','background','المخاطر المطلقة وجداول مقارنة المجموعات.'],
['c16',47,43,'المقارنات النسبية','Relative risk in study designs','direct','راجع مثال الخطر النسبي في الدراسات الأترابية.'],
['c17',47,44,'المقارنات النسبية','Odds ratio in case-control studies','direct','نسبة الأرجحية في دراسات الحالات والشواهد.'],
['c18',188,141,'تقليل الاختطار في المرضى','Reducing risks in clinical practice','background','تفاصيل حساب NNT/NNH ليست موضوعًا مستقلًا في المرجعين.'],
['c19',96,71,'قيمة P واختبارات الفروض','Hypothesis tests and p-values','direct','تُشرح قيمة P والقوة الإحصائية؛ التعددية تحتاج مرجعًا إضافيًا.'],
['c20',94,70,'فترات الثقة','Confidence intervals','direct','تفسير الدقة وعدم اليقين.'],
['c21',97,71,'القوة الإحصائية','Statistical power','direct','أما حساب حجم العينة في التجارب فيرد أيضًا ضمن أنماط الدراسات.'],
['c22',91,67,'المتوسط والوسيط والتوزع','Measures of central tendency and spread','direct','المتوسط والوسيط والانحراف المعياري والتوزعات.'],
['c23',105,79,'تحليلات البقاء ومنحنيات كابلان–ماير','Survival analysis and Kaplan–Meier','direct','راجع أيضًا نموذج Cox في الصفحتين.'],
['c24',182,136,'قيمة الاختبار التشخيصي','Value of a diagnostic test','direct','الحساسية والنوعية والقيم التنبؤية حسب السياق.'],
['c25',182,136,'قيمة الاختبار التشخيصي','Value of a diagnostic test','background','المبادئ متاحة، لكن LR+ وLR− ليسا مفصّلين كدرس مستقل.'],
['c26',182,136,'قيمة الاختبار التشخيصي','Value of a diagnostic test','background','ROC وAUC ومعايرة النماذج ليست مشروحة بالتفصيل.'],
['c27',101,75,'التحوف (الانحدار)','Regression','direct','التحوف الخطي واللوجستي؛ اختيار المتغيرات أعقد مما في الكتاب.'],
['c28',91,67,'التباين والانحراف المعياري','Variance and standard deviation','background','SMD في التحليل التلوي غير مفصّل في الكتابين.'],
['c29',75,55,'الالتباس','Confounding','direct','راجع أيضًا التحيز في الانتقاء والقياس في فصل الدراسات.'],
['c30',73,53,'التحيز المنهجي','Systematic error','background','الانسحاب والبيانات المفقودة ليست مصنفة هنا حسب MCAR/MAR/MNAR.'],
['c31',117,88,'التفاعل والأسباب المتعددة','Interaction and multiple causation','background','اختبارات التفاعل وتعدد المقارنات الحديثة ليست مغطاة بالكامل.'],
['c32',null,null,null,null,'none','دراسات عدم الدونية والتكافؤ غير مشروحة في الكتابين.'],
['c33',127,95,'تصميم الدراسة والحكم على السببية','Study design and judging evidence','background','محاكاة التجربة المستهدفة وتحليلات الحساسية المتقدمة غير مغطاة.'],
['c34',108,81,'التحليل التلوي','Meta-analysis','background','Forest plot وقراءته الحديثة يحتاج مرجعًا متقدمًا.'],
['c35',108,81,'التحليل التلوي','Meta-analysis','background','I² وTau² وفاصل التنبؤ غير مشروحة تفصيليًا.'],
['c36',null,null,null,null,'none','Funnel plot واختبارات عدم التماثل غير مشروحة بما يكفي في المرجعين.'],
['c37',73,53,'التحيز المنهجي','Systematic error and bias','background','RoB 2 وROBINS-I أدوات أحدث من الإصدارين.'],
['c38',null,null,null,null,'none','GRADE غير مشروح في هذين الكتابين.'],
['c39',null,null,null,null,'none','CONSORT وSTROBE وPRISMA الحديثة غير مشروحة في الكتابين.'],
['c40',78,57,'الصدقية','Validity','direct','يعرض الصدق الداخلي والخارجي؛ تطبيق الجراحة يشرحه الدرس.'],
['c41',177,133,'الوبائيات السريرية','Clinical epidemiology','background','هو مدخل للمراجعة السريرية وليس قائمة العشر دقائق حرفيًا.'],
['c42',79,58,'الاعتبارات الأخلاقية','Ethical issues','background','التسجيل المسبق الحديث ليس مشروحًا بالتفصيل.'],
['c43',188,140,'تطبيق الدليل في الممارسة','Use of evidence-based guidelines','background','AGREE II غير مشروح في هذين المرجعين.']
].map(([id,ar,en,arTitle,enTitle,level,note])=>({id,ar,en,arTitle,enTitle,level,note}));
const M=Object.fromEntries(MAP.map(m=>[m.id,m]));
// Per-section topic redirects. null marks a concept absent from the WHO books.
const SEC={
c02:[[111,83],[null,null],[127,95]],
c05:[[68,50],[null,null],[73,53]],
c06:[[69,51],[69,51],[null,null]],
c07:[[63,46],[75,55],[null,null]],
c08:[[61,44],[47,44],[74,54]],
c11:[[182,136],[182,136],[182,136]],
c12:[[183,137],[null,null],[null,null]],
c13:[[108,81],[108,81],[108,81]],
c15:[[45,42],[45,42],[45,42]],
c16:[[47,43],[47,43],[47,43]],
c17:[[47,44],[47,44],[47,44]],
c19:[[96,71],[96,71],[null,null]],
c20:[[94,70],[94,70],[null,null]],
c21:[[97,71],[93,52],[null,null]],
c22:[[91,67],[91,68],[98,73]],
c23:[[105,79],[106,79],[105,79]],
c24:[[182,136],[182,136],[182,136]],
c25:[[null,null],[null,null],[182,136]],
c26:[[null,null],[null,null],[182,136]],
c27:[[101,75],[101,76],[null,null]],
c29:[[75,55],[73,53],[null,null]],
c30:[[null,null],[null,null],[null,null]],
c31:[[117,88],[null,null],[47,43]],
c32:[[null,null],[null,null],[null,null]],
c34:[[null,null],[108,81],[108,81]],
c35:[[null,null],[null,null],[108,81]],
c37:[[null,null],[null,null],[73,53]],
c38:[[null,null],[null,null],[null,null]],
c39:[[null,null],[null,null],[null,null]],
c42:[[null,null],[79,58],[null,null]],
c43:[[188,140],[null,null],[188,140]]
};
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&quot;',"'":'&#39;'}[c]));
let selectedLesson=null;
const mkLink=(language,page,title,level)=>{
 const isArabic=language==='ar';const name=isArabic?'العربي · WHO 2008':'English · WHO 2006';
 if(page==null)return '<div class="book-ref-unavailable"><b>'+name+'</b><small>لا يوجد شرح موثوق لهذا الجزء في هذا المرجع.</small></div>';
 const real=page+(isArabic?19:12);
 const base=isArabic?BASE_AR:BASE_EN;
 return '<a class="book-ref-link" target="_blank" rel="noopener noreferrer" href="'+base+'#page='+real+'"><strong>'+name+'</strong><small>'+E(title)+' — صفحة الكتاب المطبوعة '+page+'</small><span>افتح PDF قرب الموضوع ↗</span></a>';
};
function renderLinks(id,secIndex=null,heading=''){
 const m=M[id],panel=document.getElementById('twoBookReference');
 if(!m||!panel)return;
 const pages=secIndex!==null && SEC[id]?.[secIndex]?SEC[id][secIndex]:[m.ar,m.en];
 const ar=pages[0],en=pages[1],isSpecific=secIndex!==null;
 const note=isSpecific?'الجزء المطلوب: «'+E(heading)+'». الروابط أدناه تشير لأقرب فقرة مطابقة أو تمهيدية في الكتابين، وقد لا تغطي كل تفاصيل هذا الجزء.':(m.level==='direct'?'هذا القسم مغطى في الكتابين مع اختلاف الأمثلة.':m.level==='background'?'هذه صفحات تمهيدية للموضوع؛ الدرس التفاعلي يحتوي تفاصيل أوسع.':'هذا المفهوم خارج نطاق المرجعين المعتمدين.');
 panel.querySelector('#bookRefScope').innerHTML=note;
 panel.querySelector('#bookRefLinks').innerHTML=mkLink('ar',ar,m.arTitle,m.level)+mkLink('en',en,m.enTitle,m.level);
 panel.querySelector('#bookRefNote').textContent=m.note||'';
 panel.querySelector('#bookRefNote').hidden=!m.note;
 panel.querySelector('#bookRefPrinted').textContent='العربي: رقم PDF = الصفحة المطبوعة + 19 (متحقق منه). الإنجليزي: رابط قريب من الموضع وفق ترتيب صفحات الملف؛ الصفحة المطبوعة مذكورة بدقة من الفهرس، وقد يختلف عداد عارض PDF. إذا لم يفتح الموضع في هاتفك، انتقل إلى رقم الصفحة المطبوعة المعروض.';
 panel.querySelectorAll('.book-ref-link').forEach(a=>a.setAttribute('aria-label','فتح '+a.querySelector('strong').textContent+' '+a.querySelector('small').textContent));
}
function appendPanel(id){
 const m=M[id],body=document.getElementById('detailBody'),dlg=document.getElementById('detailDialog');
 if(!m||!body||!dlg?.open||!body.querySelector('h2'))return;
 body.querySelector('#twoBookReference')?.remove();
 body.querySelectorAll('.book-inline-help').forEach(x=>x.remove());
 const panel=document.createElement('section');panel.id='twoBookReference';panel.className='two-book-reference';
 panel.innerHTML='<h3>📖 لم أفهم — افتح نفس الموضوع في الكتابين</h3><p class="book-ref-caption" id="bookRefScope"></p><div class="book-ref-buttons" id="bookRefLinks"></div><p class="book-ref-note" id="bookRefNote" hidden></p><small id="bookRefPrinted" class="book-ref-footer"></small><button type="button" class="button" id="bookRefReset">العودة إلى المرجع العام لهذا الفصل</button>';
 body.querySelector('h2').insertAdjacentElement('afterend',panel);
 panel.querySelector('#bookRefReset').onclick=()=>renderLinks(id);
 const headings=[...body.querySelectorAll('h3')].filter(x=>!panel.contains(x)).slice(0,3);
 headings.forEach((h,i)=>{
 const b=document.createElement('button');b.type='button';b.className='book-inline-help';b.textContent='📖 شرح هذا الجزء من WHO بالعربي والإنجليزي';
 b.onclick=()=>{renderLinks(id,i,h.textContent.trim());panel.scrollIntoView({behavior:'smooth',block:'start'})};
 h.insertAdjacentElement('afterend',b);
 });
 selectedLesson=id;renderLinks(id);
}
document.addEventListener('click',event=>{
 const open=event.target.closest('[data-lesson]');
 if(open){const id=open.dataset.lesson;setTimeout(()=>appendPanel(id),0);return;}
 if(event.target.closest('#toggleDone')&&selectedLesson)setTimeout(()=>appendPanel(selectedLesson),0);
});
})();
