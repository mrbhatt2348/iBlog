function checkname() {
    var name_in = document.querySelector("#name")
    console.log(name_in.value)
    if (name_in.value.length > 10) {
      name_in.setCustomValidity("Name is too long! Kindly verify")
    }
    else {
      name_in.setCustomValidity("")
    }
  }
  function checkemail() {
    var em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email_in = document.querySelector("#email");
    if (!(email_in.value.match(em))) {
      email_in.setCustomValidity("Entered Email is invalid! Kindly verify");
    }
    else {
      email_in.setCustomValidity("");
    }
  }