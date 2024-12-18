<html>
  <body>
    <p id="err_message"></p>
    <script>
      try{
        addalert("Welcome Guest")
      }
      catch(err){
        document.getElementById("err_message").innerHTML=err.message
      }
    </script>
  </body>
</html>
