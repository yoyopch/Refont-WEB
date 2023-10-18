$(document).ready(function() {

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
   

    $("#info1").append(`<img src="./IMG/bot-actu1.jpg" alt="image-ecolo">`)
    $("#info1 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $("#info2").append(`<img src="./IMG/bot-info2.jpg" alt="image-ecolo">`)
    $("#info2 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");

    $("#info3").append(`<img src="./IMG/bot-actu3.jpg" alt="image-ecolo">`)
    $("#info3 img").css("width", "100%").css("height", "100%").css("object-fit", "cover");


    



    $(".contenu-agenda span").hover( //fonctionnement alterné du survol (mouseout,moseover) → 2 fonctions
        function() {
            $(this).css({ 'font-weight': 'bolder' });
        },
        function() {
            var cssObj = { 'font-weight': '', 'color': 'black' }
            $(this).css(cssObj);
        }
    );


    var moreActus = $("#more-actus")
    moreActus.text("+ d'actus");
    moreActus.on("click", moreActua);



    function moreActua() {

    }

})