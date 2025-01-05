var myform=document.getElementById("myform");
var myinput=document.getElementById("myinput");
var myitem=document.getElementById("myitem");

myform.addEventListener("submit",
function (event)  {
  event.preventDefault();
  createitem(myinput.value);
} )

function createitem(inputitem){
  var item=`<li>${inputitem}
  <button onclick="deleteElement(this)">delete</button></li>`;
  myitem.insertAdjacentHTML("beforeend", item);
  myinput.value="";
  myinput.focus();
}
function deleteElement(ElementToDelete){
  ElementToDelete.parentElement.remove()
}
