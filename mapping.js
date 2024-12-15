<html>
  <body>
    <p>Multiply every element by 10</p>
    <p id ="product_value"></p>
    <script>
      var number=[28,19,6,95]
      function myfuntion(num){
        return num *10
      }
      var newarray=number.map(myfuntion);
      document.getElementById("product_value").innerHTML=newarray;
    </script>
  </body>
</html>
