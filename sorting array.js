<html>
  <body>
    <p>Clink on the buttons to get numbers in ascending or descending order</p>
    <button onclick="ascending()">ascending order</button>
    <button onclick="descending()">descending order</button>
    <p id="result"></p>
    <script>
      var points=[40,100,1,5,25,10];
      document.getElementById("result").innerHTML=points
     
       function ascending() {
        points.sort(function(a,b){return a-b});
        document.getElementById("result").innerHTML=points
      }
    
       function descending() {
        points.sort(function(a,b){return b-a});
        document.getElementById("result").innerHTML=points
      }
      </script>
  </body>
</html>
    
