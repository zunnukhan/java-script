<html>
  <body>
  
    <p id="result"></p>
    <script>
      function mydisplay (value){
        document.getElementById("result").innerHTML=value;
      }
      function mycalculator(num1,num2,myCallback){
        let sum=num1+num2;
        myCallback(sum);
      }
      mycalculator(4,5,mydisplay);
      </script>
  </body>
        </html>
