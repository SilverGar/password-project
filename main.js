const input = document.querySelector("#password");
input.addEventListener("input", checkPassword);

function checkPassword(event) {
  console.log(event)
  var password = document.getElementById("password").value;

  var re_length = ".{10,}"
  var re_numbers = "[0-9]"
  var re_uppercase = "[A-Z]"
  var re_lowercase = "[a-z]"
  var re_symbols = "[!¡\"#$%&=?¿<>|°¬´+'_¨*;:,.^`-]"
  var re_special = "[\\[\\]\\{\\}\\(\\)\\\\\\/]"

  console.log("Length: " + testString(password, re_length))
  console.log("Numbers: " + testString(password, re_numbers))
  console.log("Uppercase: " + testString(password, re_uppercase))
  console.log("Lowercase: " + testString(password, re_lowercase))
  console.log("Symbols: " + testString(password, re_symbols))
  console.log("Special: " + testString(password, re_special))


  if(password.length > 0){
    if(testString(password, re_length)) {
      document.getElementById("lengthMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("lengthMark").src = "./assets/xmark.png"
    }
  
  
    if(testString(password, re_numbers)) {
      document.getElementById("numMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("numMark").src = "./assets/xmark.png"
    }
  
  
    if(testString(password, re_uppercase)) {
      document.getElementById("capMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("capMark").src = "./assets/xmark.png"
    }
  
  
    if(testString(password, re_lowercase)) {
      document.getElementById("minMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("minMark").src = "./assets/xmark.png"
    }
  
  
    if(testString(password, re_symbols)) {
      document.getElementById("simMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("simMark").src = "./assets/xmark.png"
    }
  
  
    if(testString(password, re_special)) {
      document.getElementById("charMark").src = "./assets/checkmark.png"
    }
    else {
      document.getElementById("charMark").src = "./assets/xmark.png"
    }
  }
  else{
    document.getElementById("lengthMark").src = ""
    document.getElementById("numMark").src = ""
    document.getElementById("capMark").src = ""
    document.getElementById("minMark").src = ""
    document.getElementById("simMark").src = ""
    document.getElementById("charMark").src = ""
  }
  

}

function testString(password, regex){
  var re = new RegExp(regex)
  if(re.test(password)){
    return true
  }
  else {
    return false
  }
}