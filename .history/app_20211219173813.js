const form=document.querySelector("#form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=document.getElementById("firstName").value;
  const lastN=document.getElementById("lastName").value;
  const email=document.getElementById("email").value;
  const password=document.getElementById("passWord").value;
  if(firstN===""){
    
  }
  console.log(firstN);
})