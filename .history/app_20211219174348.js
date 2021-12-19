const form=document.querySelector("#form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=form["firstName"].value;
  const lastN=form["lastName"].value;;
  const email=form["email"].value;;
  const password=form["passWord"].value;;
  if(firstN===""){
    const small=form.querySelector('small');
   small.innerText="Firstname is required"
  }
 
})