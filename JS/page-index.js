$(document).ready(function() {
    createNavbar();

    $(".top-actu-left").append(`<img src="./IMG/top-actu-1.jpg" alt="image-ecolo">`);
    $(".top-actu-left img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $(".top-actu-right").append(`<img src="./IMG/top-actu-2.jpg" alt="image-ecolo">`);
    $(".top-actu-right img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $("#info1").append(`<img src="./IMG/bot-actu1.jpg" alt="image-ecolo">`)
    $("#info1 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $("#info2").append(`<img src="./IMG/bot-info2.jpg" alt="image-ecolo">`)
    $("#info2 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $("#info3").append(`<img src="./IMG/bot-actu3.jpg" alt="image-ecolo">`)
    $("#info3 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");




    function createNavbar() {
        $("header").html(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#"><img src="../IMG/logo/logo.png" alt="Morlaix Communauté" id="logoMorlaix"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarScroll">
<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto" style="--bs-scroll-height: 100px;">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Communauté</a>
  </li>
  <li class="nav-item"> <a class="nav-link" href="#">Domaines d\'actions</a>
  </li>
  <li class="nav-item"> <a class="nav-link" href="#">Grands projets</a> </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Equipements</a>
  </li>
</ul>
<div class="searchBox">
  <input class="input_recherch" type="text" placeholder="Rechercher.." name="search">
  <a href="#">
    <i class="fas fa-search"></i>
  </a>
</div>
</div>
</nav>`);
    }


    var moreActus = $("#more-actus")
    moreActus.text("+ d'actus");
    moreActus.on("click", moreActua);



    function moreActua() {

    }

})