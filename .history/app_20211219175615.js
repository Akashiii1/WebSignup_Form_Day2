const form=document.getElementById("form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=form['firstName'].value;
  const lastN=form['lastName'].value;;
  const email=form['email'].value;;
  const password=form['passWord'].value;
  if(firstN===''){
    addErrorTo('firstName','FirstName is required')
    
   

  }
 
})
function addErrorTo(field,mess){
  const small=form[field].parentNode.querySelector('small');
  small.innerText="FirstName is required"
 small.style.opacity="1"
}