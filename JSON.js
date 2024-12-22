<html>
  <body>
  
    <p id="result"></p>
    <script>
      var myobj={name:"Zunairah",age:11,grade:6};
      var myJSON=JSON.stringify(myobj);
      var newobj=JSON.parse(myJSON);
      document.getElementById("result").innerHTML=newobj.name;
      </script>
  </body>
        </html>
