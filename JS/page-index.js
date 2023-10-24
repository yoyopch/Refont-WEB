$(document).ready(function () {

    $(".top-actu-left").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/top-actu-1.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Partez à la découverte de la faune et la flore d'exception du territoire
            </p>
        </div>
    </div>`);


    $(".top-actu-right").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/top-actu-2.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Cela porte sur l'état d'avancement du projet d'ouverture de la rivière de Morlaix…
            </p>
        </div>
    </div>`);


    $("#info1").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/bot-actu1.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Place au spectacle vivant, aux arts de rue dans toute leur diversité, à travers une programmation de qualité, gratuite et tout public …

            </p>
        </div>
    </div>`);

    $("#info2").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/bot-info2.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Profitez des navettes estivales à Carantec, Locquirec et Plougasnou pour vous rendre jusqu’aux plages et …
            </p>
        </div>
    </div>`);

    $("#info3").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/bot-actu3.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Profitez des nombreuses animations proposées par ses occupants pour déambuler entre les jardins et …
            </p>
        </div>
    </div>`);


    // Deploiement des actus
    $("#more-actus").text("+ d'actualités");
    $("#more-actus").css("cursor", "pointer");
    $("#more-actus").on("click", function () {
    
        $(".actu-bot").slideToggle();
        $(".actu-bot").css("display","flex").css("justify-content","space-evenly");
        $("#more-actus").text(function(i, text){
            return text === "+ d'actualités" ? "- d'actualités" : "+ d'actualités";
          });
    })



    //hover de l'agenda
    $(".contenu-agenda span").hover( //fonctionnement alterné du survol (mouseout,moseover) → 2 fonctions
        function () {
            $(this).css({ 'font-weight': 'bolder' });
        },
        function () {
            var cssObj = { 'font-weight': '', 'color': 'black' }
            $(this).css(cssObj);
        }
    );



    //Son de la vidéo
    $(".video span").on("click", function () {
        if ($(".video video").prop("muted") == true) {
            $(".video span").html("volume_up");
            $(".video video").prop("muted", false);
        } else {
            $(".video span").html("no_sound");
            $(".video video").prop("muted", true);
        }
    });

    //Nom des communes au hover
    const paths = $("svg path");
    txtCommune = $(".nom-communes");
    paths.on("mouseover", function () {
        txtCommune.text($(this).attr("title"));
    });
    paths.on("mouseout", function () {
        txtCommune.text("")
    });


    $(window).on("scroll", reveal);
    function reveal() {
        var windowHeight = window.innerHeight;
        var reveals = $(".reveal");
        for (var i = 0; i < reveals.length; i++) {

            var revealTop = reveals[i].getBoundingClientRect().top;

            reveals[i].classList.remove("active");

            if (revealTop < windowHeight) {
                reveals[i].classList.add("active");
            }
        }
    }
})