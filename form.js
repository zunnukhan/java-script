

<html>
  <head>
    <script>
      function validateform(){
        var x=document.form["myform"]["fname.value;"]
        if (x==""){
          alert ("Name must be filled out");
          return false;
        }
        else document.write("Name submitted");
      }
    </script>
    <body>
      <form name="myform" onsubmit="validateform()">
        Name:<input type="text" name="fname">
        <input type="submit" value="Submit">
        <p id="message"></p>
      </form>
    </body>
    </html>
