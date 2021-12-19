const form=document.getElementById("form");


form.addEventListener("submit",function(e){
  e.preventDefault();
  const firstN=form['firstName'].value;
  const lastN=form['lastName'].value;;
  const email=form['email'].value;;
  const password=form['passWord'].value;
  if(firstN===''){
    addErrorTo('firstName','FirstName is required');
  }else{
    removeError('firstName')
  }
  if(lastN===''){
    addErrorTo('lastName','LastName is required');
  }else{
    removeError('lastName')
  }
  if(email===''){
    addErrorTo('email','Email cannot empty');
  }else{
    removeError('email')
  }
  
  if(isValid(email)){
    addErrorTo('email','Email is not valid');
  }else{
    removeError('email')
  }
  if(password===''){
    addErrorTo('passWord','PassWord cannot empty');
  }else{
    removeError('passWord')
  }

 
})
function addErrorTo(field,mess){
  const small=form[field].parentNode.querySelector('small');
  small.innerText=mess;
 small.style.opacity="1"
}
function removeError(field){
  const small=form[field].parentNode.querySelector('small');
  small.style.opacity="0"
}
function isValid(email){
  var re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
}