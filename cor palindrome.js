function palindrome(mystring){
  var input=mystring.toLowerCase();
  var reverseinput=input.split('').reverse().join('');
  if (input===reverseinput){
    document.write("<div>" + mystring  + " is a palindrome <div>");
}
  else {
    document.write("<div>" + mystring  + " is not palindrome <div>");
}
}
palindrome("mam")
