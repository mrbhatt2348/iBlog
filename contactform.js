const form=document.getElementById('form');
const username=document.getElementById('name');
const email=document.getElementById('email');
const subject=document.getElementById('subject');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    });


function checkInputs(){
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();

//username 
  if( nameValue === ''){
    setErrorFor(username, 'Name cannot be blank');
  } 
  
  else if(nameValue.length<=4){
    setErrorFor(username, 'Username minimum 5 character ');
  }

  else {
   setSuccessFor(username);
  }

  //email

  if(emailValue === ''){
     setErrorFor(email, 'Email cannot be blank');
  }
  else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} 
  else{
    setSuccessFor(email);
  }

  //Subject 
  if( subjectValue === ''){
    setErrorFor(subject, 'Subject cannot be blank');
  } 
  
  else if(subjectValue.length<=10){
    setErrorFor(subject, 'Please write a good subject ');
  }

  else {
   setSuccessFor(subject);
  }

  
 
  

}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
   small.innerText = message;
   formControl.className = 'field error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'field success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
