let noticeboard=document.querySelector('.noticeboard');
let nta=document.getElementsByClassName('nta');
let intropara=document.getElementById("intropara");
let New=document.querySelector('#new');
let body=document.querySelector('body');
let menu=document.getElementById('menu');
let menu0=document.querySelector('.menu');
let d3=document.getElementById('d3');
let d2=document.getElementById('d2');
let paus=document.querySelector('#paus');
let hidd=document.querySelector('#hidd');
let Aminus=document.querySelector('#Aminus');
let fabars=document.querySelector('.fa-bars');
let p=document.querySelectorAll('p');
let notice=document.querySelector('.notice');
let mainnews=document.querySelector('#mainnews');
let flowtext=document.getElementById('flowtext');
let publicnotice=document.querySelector('.publicnotice');
let newsevent=document.querySelector('.newsevent');
let Download=document.querySelector('.Download');
let god=document.querySelectorAll('#god');
let post=document.querySelector('#post');
let textmoving=document.getElementById('textmoving');
let exam=document.getElementById('exam');
let exam0=document.getElementById('exam0');
let exam1=document.getElementById('exam1');
let i1=document.getElementById('i1');
let it=document.getElementById('it');
let itt=document.querySelector('#itt');
let cross=document.querySelector('#cros');
let clos=document.querySelector('#clos');
let home=document.querySelector('.home');
let right=document.getElementById('right');
let d1=document.getElementById('d1');
let latestnews=document.getElementsByClassName('latestnews');
let  heading=document.querySelector('.heading');
let  w6=document.querySelector('.w6');
let  w70=document.querySelector('#w70');
let  www=document.querySelector('#www');
let  j3=document.querySelector('#j3');
let  foot=document.querySelector('.foot');
let  dotted=document.querySelectorAll('dotted');
let d33=document.getElementsByClassName('d3');
let d4=document.getElementsByClassName('d4');
/*let dotted=document.getElementsByClassName('dotted');*/
newsevent.addEventListener('click',()=>{
  publicnotice.classList.add('newsevent')
  newsevent.classList.remove('newsevent')
  flowtext.style.visibility='hidden';
  post.style.visibility='visible';
  post.style.color='rgba(0,0,0,0.8)';
  post.style.fontSize="13px";
  post.innerHTML='<!--<i class="fas fa-heart"></i><br>-->No post to display<!--<p><i class="fas fa-caret-right"></i><a href="#">NEET(UG) 2024 Exam paper is leak in many states</a><b id="new">NEW!</b></p><br><div class="dotted"></div><p><i class="fas fa-caret-right"></i><a href="#">NEET(UG)2024 Exam case issued in supreme court</a><b id="new">NEW!</b></p><br><div class="dotted"></div>-->';
})
publicnotice.addEventListener('click',()=>{
  publicnotice.classList.remove('newsevent')
  newsevent.classList.add('newsevent')
  flowtext.style.visibility='visible';
  post.style.visibility='hidden';
  post.innerHTML='';
})
function Ans(){
  swal("Close","Answer key challenge has been closed","error");
}
function Minus(){
  intropara.style.fontSize="12px";
  New.style.fontSize="12px";
  notice.style.fontSize="11px";
  textmoving.style.fontSize="13px";
  exam.style.fontSize="12px";
  exam0.style.fontSize="12px";
  exam1.style.fontSize="12px";
  heading.style.fontSize="12px";
  w6.style.fontSize="12px";
  www.style.fontSize="12px";
  j3.style.fontSize="12px";
  w70.style.fontSize="12px";
  it.style.fontSize="12px";
  itt.style.fontSize="12px"
  foot.style.fontSize="12px"
  cross.style.fontSize="12px";
  clos.style.fontSize="12px";
  d1.style.fontSize="12px";
  home.style.fontSize="12px";
  i1.style.fontSize="12px";
  menu.style.fontSize="12px";
  menu0.style.innerHeight="80px";
  fabars.style.fontSize="12px";
 // d1.style.innerHeight="20px";
 // latestnews.style.innerHeight="20px";
  publicnotice.style.fontSize="13px";
  newsevent.style.fontSize="13px";
  newsevent.addEventListener('click',()=>{
  publicnotice.classList.add('newsevent')
  newsevent.classList.remove('newsevent')
  flowtext.style.visibility='hidden';
  post.style.visibility='visible';
  post.style.fontSize="12px";
  post.style.color='rgba(0,0,0,0.8)';
  post.innerHTML='<!--<i class="fas fa-heart"></i><br>-->No post to display<!--<p><i class="fas fa-caret-right"></i><a href="#">NEET(UG) 2024 Exam paper is leak in many states</a><b id="new">NEW!</b></p><br><div class="dotted"></div><p><i class="fas fa-caret-right"></i><a href="#">NEET(UG)2024 Exam case issued in supreme court</a><b id="new">NEW!</b></p><br><div class="dotted"></div>-->';
})
}

function Plus(){
  intropara.style.fontSize="13px";
  New.style.fontSize="15.5px";
  notice.style.fontSize="15px";
  textmoving.style.fontSize="20.5px";
  exam.style.fontSize="16px";
  exam0.style.fontSize="16px";
  exam1.style.fontSize="16px";
  heading.style.fontSize="15px";
  w6.style.fontSize="18px";
  www.style.fontSize="18px";
  j3.style.fontSize="18px";
  w70.style.fontSize="20px";
  it.style.fontSize="18px";
  itt.style.fontSize="18px"
  foot.style.fontSize="16px"
  cross.style.fontSize="18px";
  clos.style.fontSize="18px";
  d1.style.fontSize="14px";
  home.style.fontSize="17px";
  i1.style.fontSize="18px";
  menu.style.fontSize="16px";
//  menu0.style.innerHeight="100px";
  fabars.style.fontSize="16px";
 // d1.style.innerHeight="20px";
 // latestnews.style.innerHeight="20px";
  publicnotice.style.fontSize="17px";
  newsevent.style.fontSize="17px";
  newsevent.addEventListener('click',()=>{
  publicnotice.classList.add('newsevent')
  newsevent.classList.remove('newsevent')
  flowtext.style.visibility='hidden';
  post.style.visibility='visible';
  post.style.fontSize="16px";
  post.style.color='rgba(0,0,0,0.8)';
  post.innerHTML='<!--<i class="fas fa-heart"></i><br>-->No post to display<!--<p><i class="fas fa-caret-right"></i><a href="#">NEET(UG) 2024 Exam paper is leak in many states</a><b id="new">NEW!</b></p><br><div class="dotted"></div><p><i class="fas fa-caret-right"></i><a href="#">NEET(UG)2024 Exam case issued in supreme court</a><b id="new">NEW!</b></p><br><div class="dotted"></div>-->';
})
}
function Normal(){
  intropara.style.fontSize="14.5px";
  New.style.fontSize="15px";
  notice.style.fontSize="14px";
  textmoving.style.fontSize="20px";
  exam.style.fontSize="15px";
  exam0.style.fontSize="15px";
  exam1.style.fontSize="15px";
  heading.style.fontSize="14px";
  w6.style.fontSize="16px";
  www.style.fontSize="16px";
  j3.style.fontSize="16px";
  w70.style.fontSize="19px";
  it.style.fontSize="16px";
  itt.style.fontSize="16px"
  foot.style.fontSize="16px"
  cross.style.fontSize="16px";
  clos.style.fontSize="16px";
  d1.style.fontSize="13px";
  home.style.fontSize="16px";
  i1.style.fontSize="16px";
  menu.style.fontSize="15px";
//  menu0.style.innerHeight="100px";
  fabars.style.fontSize="15px";
 // d1.style.innerHeight="20px";
 // latestnews.style.innerHeight="20px";
  publicnotice.style.fontSize="16px";
  newsevent.style.fontSize="16px";
  newsevent.addEventListener('click',()=>{
  publicnotice.classList.add('newsevent')
  newsevent.classList.remove('newsevent')
  flowtext.style.visibility='hidden';
  post.style.visibility='visible';
  post.style.fontSize="15px";
  post.style.color='rgba(0,0,0,0.8)';
  post.innerHTML='<!--<i class="fas fa-heart"></i><br>-->No post to display<!--<p><i class="fas fa-caret-right"></i><a href="#">NEET(UG) 2024 Exam paper is leak in many states</a><b id="new">NEW!</b></p><br><div class="dotted"></div><p><i class="fas fa-caret-right"></i><a href="#">NEET(UG)2024 Exam case issued in supreme court</a><b id="new">NEW!</b></p><br><div class="dotted"></div>-->';
})
}

function Skip(){
 // body.style.backgroundColor="#60ecf50c";
 flowtext.style.backgroundColor="#fff";
  flowtext.style.border="0px solid black";
  intropara.style.backgroundColor="#fff";
  intropara.style.border="0px solid black";
  intropara.style.padding="0px";
  intropara.style.borderRadius="0px";
 body.style.backgroundColor="#3993ff15";
}
function Sitemap(){
/*  flowtext.style.backgroundColor="#ffff003b";
  flowtext.style.border="1px solid black";
  intropara.style.backgroundColor="#ffff003b";
  intropara.style.border="1px solid black";
  intropara.style.padding="10px";
  intropara.style.borderRadius="4px";*/
  body.style.backgroundColor="#80008012";
}
/*function Play(){
  Download.setAttribute("onmouseover","stop()");
  Download.setAttribute("onmouseout","start()");
  Download.setAttribute("behavior","alternate");
// Download.setAttribute("scrollamount",1)
}*/
