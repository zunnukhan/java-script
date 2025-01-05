<html>                                                                   
  <body>
    <h1>Press the button to change the BG colour</h1>
    <button  onclick="orange()">Orange</button><br>
     <button  onclick="blue()">Blue</button><br>
     <button  onclick="pink()">Pink</button>
  </body>
</html>




backgrond:orange;
}
body.blue{
  backgrond:blue;
}
body.pink{
  backgrond:pink;
}


function orange(){
  document.body.className="orange";
}
function blue(){
  document.body.className="blue";
}
function pink(){
  document.body.className="pink";
}


}
