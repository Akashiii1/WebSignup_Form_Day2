const form=document.querySelector("#form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=form["firstName"].value;
  const lastN=form["lastName"].value;;
  const email=form["email"].value;;
  const password=form["passWord"].value;;
  if(firstN===""){
    firstN.parentNode.querySelector("small").innerText="FirstName is required"
  }
  console.log(firstN);
})