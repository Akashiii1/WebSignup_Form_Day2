const form=document.querySelector("#form");
const firstN=document.getElementById("firstName")
const lastN=document.getElementById("lastName")
const email=document.getElementById("email")
const password=document.getElementById("password")

form.addEventListener("submit",function(e){
  e.preventDefault();
  console.log(e.target);
})