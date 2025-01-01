var choice=prompt("Welcome to perimeter calculator.\n Please enter your choice.\n1 Perimeter of rectangle.\n2 Perimeter of triangle.\n3 Perimeter of square");
if (choice=="1") {
  var l=prompt("enter the Length");
  var b=prompt("enter the breath");
  var result=2*(Number(l)+Number(b));
  alert("the perimeteris"+ result);
}  
if (choice=="2") {
  var s1=prompt("enter the side1")
   var s2=prompt("enter the side2")
    var s3=prompt("enter the side3")
   var result=Number(s1)+Number(s2)+Number(s3)
   alert("the perimeteris"+ result)
}                 
if (choice=="3") {
  var side=prompt("enter the sides")
   var result=Number(side)+Number(side)+Number(side)+Number(side)
   alert("the perimeteris"+ result)
}                 
