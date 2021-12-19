const form=document.querySelector("#form");
const firstN=document.getElementById("firstName")
const lastN=document.getElementById("lastName")
const email=document.getElementById("email")
const password=document.getElementById("passWord")

form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstValue=firstN.value;
  if(!firstValue){
    
  }
  console.log(e.target);
})