<html>
     <body>
       <input id="id1" type="number" min="100" max="300" required>
       <button onclick="myfunction()">OK</button>
       <p id="id2"></p>
        <script>
          function myfunction(){
            var inputobj=document.getElementById("id1");
            if (!inputobj.checkValidity()) 
            {document.getElementById("id2").innerHTML=inputobj.validationMessage;}
              
          else{
            document.getElementById("id2").innerHTML="Input OK"
          }}
       </script>
  </body>
    </html>
