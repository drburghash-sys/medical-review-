/* SurgRead topic-to-textbook crosswalk: Arabic WHO 2008 and uploaded English OSU 2020.
   Page numbers refer to the actual PDF pages, not printed book folios.
   A blank page means the requested method is not adequately covered; no false deep link. */
(()=>{
'use strict';
const AR='https://applications.emro.who.int/dsaf/dsa970.pdf';
const EN='https://open.oregonstate.education/epidemiology/open/download?type=pdf';
const ref=[
['c01',196,165,'الوبائيات السريرية وأسلوب قراءة الورقة','How to Read an Epidemiologic Study','PICO بصيغته الكاملة ليس مفصّلًا في المرجعين؛ هذه أقرب أقسام للقراءة النقدية.'],
['c02',130,143,'التسبب في الوبائيات','Causality and Causal Thinking'],
['c03',196,165,'الوبائيات السريرية','How to Read an Epidemiologic Study','هذه أقرب أقسام للقراءة النقدية، وليست شرحًا مستقلًا لبنية IMRaD.'],
['c04',104,51,'أساسيات الإحصاء الحيوي','2 × 2 Tables and Measurement'],
['c05',87,125,'التجارب العشوائية ذات الشواهد','Randomized Controlled Trials'],
['c06',88,125,'التجارب المجتمعية والعنقودية','Randomized Controlled Trials','تصاميم pragmatic وcrossover ليست مفصّلة في الكتابين.'],
['c07',82,122,'الدراسات الأترابية','Cohort Studies'],
['c08',80,128,'دراسات الحالات والشواهد','Case-Control Studies'],
['c09',78,131,'الدراسات المقطعية','Cross-Sectional Studies'],
['c10',74,132,'الدراسات الوصفية','Case Reports and Case Series'],
['c11',201,157,'الاختبارات التشخيصية','Screening and Diagnostic Testing'],
['c12',196,null,'الوبائيات السريرية',null,'نماذج التنبؤ الحديثة وTRIPOD ليست مشروحة بالتفصيل في هذين الكتابين.'],
['c13',null,135,null,'Systematic Reviews and Meta-analyses','يشرح الكتاب الإنجليزي المبادئ العامة؛ التفاصيل الحديثة للمراجعات المنهجية ليست في المرجع العربي.'],
['c14',null,null,null,null,'تحسين الجودة والبحث النوعي غير مفصلين في هذين الكتابين.'],
['c15',42,51,'قياس التواتر وجدول 2×2','2 × 2 Tables'],
['c16',66,55,'المقارنات النسبية','Risk Ratios'],
['c17',66,60,'المقارنات النسبية','Odds Ratios'],
['c18',207,67,'تقليل الاختطار في الممارسة السريرية','Number Needed to Treat','يتناول المرجعان مقاييس الأثر؛ راجع طريقة حساب NNT/NNH في الفصل التفاعلي.'],
['c19',115,72,'الفرضيات وقيمة P','P Values and Random Error'],
['c20',115,74,'اختبار الفرضيات والدقة','Confidence Intervals'],
['c21',90,76,'حجم العينة والقوة الإحصائية','Random Error and Power'],
['c22',110,null,'المتوسط والتوزع والمدرجات',null,'الكتاب الإنجليزي لا يقدم فصلًا مستقلًا كافيًا عن الإحصاء الوصفي.'],
['c23',124,null,'تحليل البقاء ومنحنيات كابلان–ماير',null,'Kaplan–Meier مشروح في فصل الإحصاء الحيوي العربي؛ كتاب Foundations لا يغطيه.'],
['c24',201,157,'قيمة الاختبار ودقة التشخيص','Diagnostic Test Accuracy'],
['c25',201,null,'الاختبارات التشخيصية',null,'نسب الترجيح LR ليست مفصّلة كموضوع مستقل في الكتاب الإنجليزي.'],
['c26',201,null,'الاختبارات التشخيصية',null,'ROC/AUC وحدود القرار ليست مغطاة على نحو كافٍ في الكتابين.'],
['c27',119,96,'الطرق الإحصائية الأساسية والتحوف', 'Methods of Confounder Control','هذه أقسام قريبة؛ نماذج الانحدار متعددة المتغيرات ليست مشروحة بصورة كاملة.'],
['c28',null,null,null,null,'SMD والفروق المعيارية في التحليل التلوي غير مشروحة في هذين المرجعين.'],
['c29',94,95,'الالتباس والتحيز','Confounding'],
['c30',93,84,'الانحياز المنهجي','Bias','هذه أقسام عن الانحياز عمومًا؛ معالجة البيانات المفقودة ليست مفصّلة.'],
['c31',null,118,null,'Effect Modification','التفاعل مشروح في الإنجليزي؛ تعدد الاختبارات ليس مفصّلًا فيهما.'],
['c32',null,null,null,null,'تجارب عدم الدونية والتكافؤ غير مفصّلة في الكتابين.'],
['c33',94,96,'الالتباس والتحيز','Confounder Control','هذه أقسام أساسية فقط؛ التحليل السببي المتقدم وتحليلات الحساسية أوسع منها.'],
['c34',null,135,null,'Systematic Reviews and Meta-analyses','Forest plot غير مشروح تفصيليًا؛ الرابط يشير إلى قسم المراجعات المنهجية.'],
['c35',null,null,null,null,'I² وTau² غير مفصّلين في هذين المرجعين.'],
['c36',null,87,null,'Publication Bias','شرح انحياز النشر متاح، لكن Funnel plot غير مشروح بالتفصيل.'],
['c37',92,83,'التحيز في الدراسات','Selection and Measurement Bias','الأدوات RoB 2 وROBINS-I أحدث وأكثر تخصصًا من الكتابين.'],
['c38',null,null,null,null,'GRADE غير مشروح في الكتابين؛ استعن بالرابط الأصلي لفريق GRADE في صفحة المراجع.'],
['c39',null,null,null,null,'CONSORT وSTROBE وPRISMA غير مفصّلة في الكتابين؛ توجد مصادرها الأصلية في المراجع.'],
['c40',97,81,'المصدوقية والتحيز وقابلية التطبيق','Internal and External Validity'],
['c41',196,165,'الوبائيات السريرية','How to Read an Epidemiologic Study'],
['c42',98,null,'الاعتبارات الأخلاقية',null,'التسجيل المسبق والبروتوكولات الحديثة ليست مفصّلة في الكتابين.'],
['c43',196,null,'الوبائيات السريرية',null,'AGREE II غير مشروح في الكتابين؛ مرجعه المتخصص في قائمة المراجع.']
];
const MAP=Object.fromEntries(ref.map(r=>[r[0],{a:r[1],e:r[2],al:r[3],el:r[4],note:r[5]||''}]));
const escape=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
let lastLesson='';
function render(id){
 const m=MAP[id],body=document.getElementById('detailBody'),dlg=document.getElementById('detailDialog');
 if(!m||!body||!dlg?.open||!body.querySelector('h2'))return;
 body.querySelector('#twoBookReference')?.remove();
 const sections=[...body.querySelectorAll('h3')].slice(0,3).map(x=>x.textContent.trim());
 const label=x=>x?escape(x):'لا يغطي المرجع هذا الموضوع بصورة كافية';
 const a=m.a?'<a class="book-ref-link" target="_blank" rel="noopener noreferrer" href="'+AR+'#page='+m.a+'"><strong>العربي · WHO</strong><small>'+label(m.al)+' — صفحة PDF '+m.a+'</small><span>فتح الموضع ↗</span></a>':'<div class="book-ref-unavailable"><b>العربي · WHO</b><small>لا يوجد موضع مطابق موثوق لهذا الموضوع.</small></div>';
 const e=m.e?'<a class="book-ref-link" target="_blank" rel="noopener noreferrer" href="'+EN+'#page='+m.e+'"><strong>English · Oregon State</strong><small>'+label(m.el)+' — PDF page '+m.e+'</small><span>Open relevant section ↗</span></a>':'<div class="book-ref-unavailable"><b>English · Oregon State</b><small>No sufficiently relevant passage was indexed.</small></div>';
 const el=document.createElement('section');el.id='twoBookReference';el.className='two-book-reference';
 el.innerHTML='<h3>📖 لم أفهم هذا المفهوم — افتح الكتابين</h3><p class="book-ref-caption">مواضع مرتبطة بنفس موضوع الدرس، وليست دائمًا شرحًا مطابقًا لكل مصطلح. افتح الصفحة المقترحة مباشرة في كل مرجع.</p><div class="book-ref-buttons">'+a+e+'</div>'+(m.note?'<p class="book-ref-note">'+escape(m.note)+'</p>':'')+'<div class="book-ref-subtopics"><b>أجزاء هذا الفصل:</b> '+(sections.length?sections.map(x=>'<span>'+escape(x)+'</span>').join(' '):'')+'</div><small class="book-ref-footer">المصدر العربي: «أساسيات علم الوبائيات» (WHO، 2008). المرجع الإنجليزي المرفوع: Foundations of Epidemiology (Oregon State University، 2020)، وليس إصدار WHO.</small>';
 body.querySelector('h2').insertAdjacentElement('afterend',el);
 [...body.querySelectorAll('h3')].filter(h=>!el.contains(h)).slice(0,3).forEach(h=>{
   const btn=document.createElement('button');
   btn.type='button';btn.className='book-inline-help';
   btn.textContent='📖 راجع هذا الجزء في المرجعين';
   btn.onclick=()=>{
     const caption=el.querySelector('.book-ref-caption');
     caption.textContent='الجزء المطلوب: '+h.textContent.trim()+' — يعرض الروابط أقرب قسم ذي صلة في الكتابين. قد لا يغطي هذا القسم الفرعي حرفيًا.';
     el.scrollIntoView({behavior:'smooth',block:'center'});
   };
   h.insertAdjacentElement('afterend',btn);
 });
 lastLesson=id;
}
document.addEventListener('click',e=>{
 const ch=e.target.closest('[data-lesson]');
 if(ch){const id=ch.dataset.lesson;setTimeout(()=>render(id),0);return;}
 if(e.target.closest('#toggleDone')&&lastLesson){setTimeout(()=>render(lastLesson),0);}
});
})();
