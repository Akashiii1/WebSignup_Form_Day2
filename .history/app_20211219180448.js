const form=document.getElementById("form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=form['firstName'].value;
  const lastN=form['lastName'].value;;
  const email=form['email'].value;;
  const password=form['passWord'].value;
  if(firstN===''){
    addErrorTo('firstName','FirstName is required');
  }
  if(lastN===''){
    addErrorTo('lastName','LastName is required');
  }
  if(email===''){
    addErrorTo('email','Email cannot empty');
  }
  if(isValid(email)){
    addErrorTo('email','Email is not valid');
  }
  if(password===''){
    addErrorTo('passWord','PassWord cannot empty');
  }
 
})
function addErrorTo(field,mess){
  const small=form[field].parentNode.querySelector('small');
  small.innerText=mess;
 small.style.opacity="1"
}
function isValid(email){
  var re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
}