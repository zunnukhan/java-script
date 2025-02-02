html>
    <head>
        <link rel="stylesheet" href=

"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<script src=

"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">

</script>
<title>navgation</title>
<style>
body{
margin: 0;
font-family: Arial, Helvetica, sans-serif;
}
.topnav{
overflow: hidden;
background-color: #0a2dc55e;
}
.topnav a{
float: left;
color: deeppink;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}
.topnav a:hover{
background-color: blueviolet;
color: deepskyblue;
}
topnav a.active{
background-color: yellowgreen;
color: darkcyan;
}
.footer{
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  background-color:purple;
  color:white;
  text-align:center;
}
  </style>
  </head>
<body>
<div class="topnav">
<a class="active" href="index.html">Home</a>
<a href="about.html">About us</a>
  <a href="contactme.html">Contact us</a>
<a href="gallery.html">Gallery</a>
  <a href="academics.html">Academics</a>
  <a href="acivity.html">Activities</a>
  <a href="adminitration.html">Administration</a>
</div>
<div class="carousel-container">
    <img class="myslides"
        src="https://cdnbbsr.s3waas.gov.in/s3kv04618accd3d4aa8a2bdd25cd89466f/uploads/2024/06/2024062527.jpeg"
        height="600" width="900" alt="slide1">
    <img class="myslides"
        src="https://cdnbbsr.s3waas.gov.in/s3kv04618accd3d4aa8a2bdd25cd89466f/uploads/2024/06/2024062579.jpeg"
        height="600" width="900" alt="slide2">
    <img class="myslides" src="https://cdnbbsr.s3waas.gov.in/s3kv04618accd3d4aa8a2bdd25cd89466f/uploads/2024/06/2024062518.jpg" height="600" width="900" alt="slide3">
</div>
<head>
    <title>Cards</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<div class="footer">
    <p>Content Owned by PM SHRI KENDRIYA VIDYALAYA AMBARNATH(SHIFT 1)<br>
        Developed and hosted by National Informatics Centre,<br>
        Ministry of Electronics & Information Technology,<br> Government of India
        
        Last Updated: <b>Jan 29, 2025</b>
        
        <b>Visitor: 9745</b>
    </p>
</div>


        
            

    <div class="container mt-5">
        <div class="card " style="width: 18rem;">
            <img class="card-img-top"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">User Name</h5>
                <p class="card-text">Passionate about programming.</p>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <script>
        var index = 0;
            function carousel() {
                var i;
                var x = document.getElementsByClassName("myslides")
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                index++;
                if (index > x.length) {
                    index = 1;
                }
                x[index - 1].style.display = "block";
                setTimeout(carousel, 3000);
            }
            carousel();
            
                    
            </script>
</body>
</html>
