let chk_uppercase = function(str) {
  Regexp = /^[A-Z]/;
  if (Regexp.test(str)) {
    console.log(str +" has the first character as uppercase");
  } else {
    console.log(str + " does not have the first character as uppercase");
  }
}
chk_uppercase("Kku");
chk_uppercase("kku");