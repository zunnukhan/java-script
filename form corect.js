<html>

<head>

<script>

function validateform(){

var x=document.forms["myform"]["fname"].value;

if (x==""){

alert ("Name must be filled out");

return false;

}

else document.write("Name sumitted");

}

</script>

</head>

<body>

<form name="myform" onsubmit="validateform()">

Name:<input type="text" name="fname">

<input type="submit" value="Submit">

<p id="message"></p>

</form>

</body>
