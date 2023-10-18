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

    $("#more-actus").text("+ d'actus");
    $("#more-actus").css("cursor", "pointer");
    var moreActu = 0;
    $("#more-actus").on("click", function () {
        if (moreActu == 0) {
            $(".actu-bot").css("display", "none");
            $("#more-actus").text("+ d'actus");
            moreActu = 1;
        } else {
            $(".actu-bot").css("display", "flex");
            $("#more-actus").text("- d'actus");
            moreActu = 0;
        }

    })
    $(".contenu-agenda span").hover( //fonctionnement alterné du survol (mouseout,moseover) → 2 fonctions
        function () {
            $(this).css({ 'font-weight': 'bolder' });
        },
        function () {
            var cssObj = { 'font-weight': '', 'color': 'black' }
            $(this).css(cssObj);
        }
    );

    $(".video span").on("click", function () {
        var video = $(".video video");
        if ($(".video video").attr("muted") === "true") {
            $(".video span").html("").append("volume_up");
            $(".video video").attr("muted", "false");
        } else {
            $(".video span").html("").append("no_sound");
            $(".video video").attr("muted", "true");
        }
    });


})