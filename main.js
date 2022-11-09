function checkPassword() {
  var password = document.getElementById("password").value;

  var re_length = ".{10,}"
  var re_numbers = ".[0-9]"
  var re_uppercase = "[A-Z]"
  var re_lowercase = ".{10,}"
  var re_symbols = ".{10,}"
  var re_special = "[\[\]\{\}\(\)\\\/]"



  console.log("Length: " + testString(password, re_length))
  console.log("Numbers: " + testString(password, re_numbers))
  console.log("Uppercase: " + testString(password, re_uppercase))
  console.log("Lowercase: " + testString(password, re_lowercase))
  console.log("Symbols: " + testString(password, re_symbols))
  console.log("Special: " + testString(password, re_special))

  
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