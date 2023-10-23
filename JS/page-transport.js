$(document).ready(function () {

    $(".top-img-one").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/transport/navette.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Navettes électriques : découvrez la nouvelle ligne de la gare SNCF à la place Cornic !
            </p>
        </div>
    </div>`);


    $(".top-img-two").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/transport/Velo.jpeg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Prime achat Vélo à Assistance Electrique (VAE) 2023 : Lors de l'achat d'un vélo électrique, Morlaix Communauté vous accompagne !
            </p>
        </div>
    </div>`);


    
    $("#info1").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/bus.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Place au spectacle vivant, aux arts de rue dans toute leur diversité…

            </p>
        </div>
    </div>`);

    $("#info2").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/train.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">
            L'abonnement TER Uzuel+ Bus fait bénéficier d'une réduction de 50% sur le réseau Linéotim de Morlaix Communauté
            </p>
        </div>
    </div>`);

    $("#info3").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/Ouestgo.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Plate-forme de covoiturage de proximité, convivial et solidaire.
            </p>
        </div>
    </div>`);

    // Deploiement des autres transports
    $("#more-transport").text("Autres rubriques...");
    $("#more-transport").css("cursor", "pointer");
    var moreTransp = 1;
    $("#more-transport").on("click", function () {
        if (moreTransp == 0) {
            $(".second-transport")[0].classList.remove("extend");
            $("#more-transport").text("Voir plus");
            moreTransp = 1;
        } else {
            $(".second-transport")[0].classList.add("extend");
            $("#more-transport").text("Voir moins");
            moreTransp = 0;
        }

    })


    $(window).on("scroll", reveal);
    function reveal() {
        var reveals = $(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealTop < windowHeight - revealpoint) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }



    
})



