const btm=document.querySelector(".btm");
const btm1=document.querySelector(".btm1");
const titl=document.querySelector(".title");

btm.addEventListener("click",function(){
  document.body.style.background="rgb(38, 180, 224)";
})
btm1.addEventListener("click",function(){
  titl.innerText="Hello Welcomt to Git and Github";
  console.log("modified my js file");
})
