$(document).ready(function() {
    createNavbar();
    creaetFooter();

    function createNavbar() {
        $("header").html(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="./index.html"><img src="../IMG/logo/logo.png" alt="Morlaix Communauté" id="logoMorlaix"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarScroll">
<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto" style="--bs-scroll-height: 100px;">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="./services.html">Services publics</a>
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
    
    function creaetFooter(){
      $("footer").html(`<div class="info-top">
      <div class="infos-ville">
        <h4>Morlaix Communauté</h4>
        <p><a
            href="https://www.google.fr/maps/place/2b+Voie+d'Acc%C3%A8s+au+Port,+29600+Morlaix/@48.5833397,-3.8389106,17z/data=!3m1!4b1!4m6!3m5!1s0x4811612844eeb06f:0x8ac0f0e581c1cd2a!8m2!3d48.5833397!4d-3.8363357!16s%2Fg%2F11g8cn_dk9?entry=ttu">2b
            Voie d'Accès au Port</a> </p>
        <p><a
            href="https://www.google.fr/maps/place/29600+Morlaix/@48.5971049,-3.862543,13z/data=!3m1!4b1!4m6!3m5!1s0x481160d5e8504c13:0xcd60ce3d9a3082d3!8m2!3d48.577613!4d-3.828228!16zL20vMDVreXE3?entry=ttu">
            29600 Morlaix</a></p>
        <p><img src="./IMG/logo/logo_phone.png" alt="phone">02 98 15 31 31</p>
        <p><img src="./IMG/logo/logo_mail.png" alt="mail"><a
            href="mailto:contact@villedemorlaix.org">contact@villedemorlaix.org</a> </p>
      </div>
      <div class="info-abo">
        <h4>Newsletter</h4>
        <p>Suivez-nous pour plus d'actualités</p>
        <button id="button">S'abonner</button>
      </div>
      <div class="reseau-ville">
        <h4>Retrouvez-nous sur :</h4>
        <div class="logo">
          <a href="https://fr-fr.facebook.com/MorlaixCommunauteOfficiel/"><img src="./IMG/logo/logo_facebook.png"
              alt="facebook" width="40" height="40"></a>
          <a href="https://twitter.com/MorlaixCo"><img src="./IMG/logo/logo_twitter.png" alt="X" width="40"
              height="40"></a>
          <a href="https://fr.linkedin.com/company/morlaix-communaut-"><img src="./IMG/logo/logo_in.png" alt="LinkedIn"
              width="40" height="40"></a>
          <a href="https://www.youtube.com/channel/UCAcE83q1zUPXpqHVHLN0Zaw"><img src="./IMG/logo/logo_ytb.png"
              alt="YouTube" width="50" height="40"></a>
        </div>
  
      </div>
  
    </div>
  
    <div class="site-plan">
      <p>© <a href="#"> Ville de Morlaix</a> | <a href="#">Plan du site</a> | <a href="#">Mentions légales</a> | <a
          href="#">Données personnelles</a> | <a href="#">Accessibilité</a>
      </p>
    </div>`)
    }



})