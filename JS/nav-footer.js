$(document).ready(function () {
  createNavBar();
  createFooter();
  checkAbonne();


  function checkAbonne() {
    if (localStorage.getItem("abonne") == "true") {
      $("#button").off("click");
      $("#button").html("").append(`
      <span class="material-symbols-outlined">
        done
      </span>`);

      $("#abonne").text("Vous êtes désormais inscrit à notre newsletter.");
    }
  }

  $(".icon").on("click", function () {
    if ($("nav").css("height") == ("86px")) {
      $(".search-bar").css("display", "flex");
    }
    else {
      $(".search-bar").css("display", "none");
    }
  })

  $(window).on("reisze", function () {
    if ($(window).width() < 1285) {
      if ($("nav").css("height") == ("86px")) {
        $(".search-bar").css("display", "flex");
      }
      else {
        $(".search-bar").css("display", "none");
      }
    }
  })

  function createNavBar() {
    $("header").html(`    <!-- Navbar du site -->
    <nav>
      <a href="./index.html"><img src="./IMG/logo/logo.png" alt="MorlaixCommunauté"></a>
      <label for="btn" class="icon">
        <span class="fa fa-bars" ></span>
      </label>
      <input type="checkbox" id="btn">

      <div class="nav-links">
        <ul>

          <li>
            <label for="btn-1" class="show">La Communauté</label>
            <a>La Communauté</a>
            <input type="checkbox"  id="btn-1">


            <ul>
              <li><a href="" class="inactif">Présentation</a></li>
              <li><a href="" class="inactif">Histoire</a></li>
              <li><a href="services.html">Services publics</a></li>
              <li><a href="" class="inactif">Territoire</a></li>
            </ul>
          </li>
          <li>
            <label for="btn-2" class="show">Sortir et Bouger</label>
            <a>Sortir et Bouger</a>
            <input type="checkbox" name="" id="btn-2">
            <ul>
              <li><a href="" class="inactif">Les Espaces Sociaux Culturels</a></li>
              <li><a href="" class="inactif">Vie sportive</a></li>
              <li><a href="" class="inactif">Vacances</a></li>
              <li><a href="" class="inactif">Activités et Loisirs</a></li>
              <li><a href="" class="inactif">Annuaire des associations</a></li>
            </ul>
          </li>
          <li>
            <label for="btn-3" class="show">Cadre de vie</label>
            <a >Sortir et Bouger</a>
            <input type="checkbox" name="" id="btn-3">
            <ul>
              <li><a href="./gestion.html">Gestions Déchets</a></li>
              <li><a href="" class="inactif">Espaces Verts</a></li>
              <li><a href="" class="inactif">Logements</a></li>
              <li><a href="./transports.html">Transports</a></li>
              <li><a href="" class="inactif">Eau et Energie</a></li>
              <li><a href="" class="inactif">Economie et Commerces</a></li>
            </ul>
          </li>
        </ul>

      </div>
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Rechercher..." size="4">
        <a href=""><span class="fa fa-search"></span></a>
        </div>
    </nav>`)
  }
  function createFooter() {
    $("footer").html(`
    <div class="info-top">
      <div class="infos-ville reveal">
        <h4>Morlaix Communauté</h4>
        <p><a
            href="https://www.google.fr/maps/place/2b+Voie+d'Acc%C3%A8s+au+Port,+29600+Morlaix/@48.5833397,-3.8389106,17z/data=!3m1!4b1!4m6!3m5!1s0x4811612844eeb06f:0x8ac0f0e581c1cd2a!8m2!3d48.5833397!4d-3.8363357!16s%2Fg%2F11g8cn_dk9?entry=ttu">2b
            Voie d'Accès au Port</a> </p>
        <p><a
            href="https://www.google.fr/maps/place/29600+Morlaix/@48.5971049,-3.862543,13z/data=!3m1!4b1!4m6!3m5!1s0x481160d5e8504c13:0xcd60ce3d9a3082d3!8m2!3d48.577613!4d-3.828228!16zL20vMDVreXE3?entry=ttu">
            29600 Morlaix</a></p>
        <p><a href="tel:0298153131"><img src="./IMG/logo/logo_phone.png" alt="phone"><a href="tel:0298153131">02 98 15 31 31</a></a></p>
        <p><a href="mailto:contact@villedemorlaix.org"><img src="./IMG/logo/logo_mail.png" alt="mail"><a
            href="mailto:contact@villedemorlaix.org">contact@villedemorlaix.org</a> <a/></p>
      </div>
      <div class="info-abo reveal">
        <h4>Newsletter</h4>
        <p>Suivez-nous pour plus d'actualités</p>
        <button id="button">S'abonner</button>
        <audio id="audioPlayer" src="../VID/subscribe_sound.mp3"></audio>
        <p id="abonne"></p>
      </div>
      <div class="reseau-ville reveal">
        <h4>Retrouvez-nous sur :</h4>
        <div class="logo">
          <a href="https://fr-fr.facebook.com/MorlaixCommunauteOfficiel/" target="_blank"><img src="./IMG/logo/logo_facebook.png"
              alt="facebook" width="40" height="40"></a>
          <a href="https://twitter.com/MorlaixCo"target="_blank"><img src="./IMG/logo/logo_twitter.png" alt="X" width="40"
              height="40"></a>
          <a href="https://fr.linkedin.com/company/morlaix-communaut-"target="_blank"><img src="./IMG/logo/logo_in.png" alt="LinkedIn"
              width="40" height="40"></a>
          <a href="https://www.youtube.com/channel/UCAcE83q1zUPXpqHVHLN0Zaw"target="_blank"><img src="./IMG/logo/logo_ytb.png"
              alt="YouTube" width="50" height="40"></a>
        </div>
  
      </div>

    </div>
  
    <div class="site-plan ">
      <p class="reveal">© <a href="#"> Ville de Morlaix</a> | <a href="#">Plan du site</a> | <a href="#">Mentions légales</a> | <a
          href="#">Données personnelles</a> | <a href="#">Accessibilité</a>
      </p>
    </div>`)
  }

  $("#button").on("click", function () {
    if (!(localStorage.getItem("abonne") == "true")) {
      $("#button").html("").append(`
      <span class="material-symbols-outlined">
        done
      </span>`);
      $("#button").off("click");
      $("#audioPlayer")[0].play();
      localStorage.setItem("abonne", "true");
      $("#abonne").text("Vous êtes désormais inscrit à notre newsletter.");
    }

  })



})