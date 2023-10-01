window.addEventListener("load", createNavbar);

function createNavbar() {
  var navbar = document.querySelector("body");
  navbar.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../IMG/logo.png" alt="Morlaix Communauté" id="logoMorlaix"></a>
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
      <form class="recherch" action="#">
        <input class="input_recherch" type="text" placeholder="Rechercher.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
</nav>`;

}