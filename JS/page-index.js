$(document).ready(function() {

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


    $(".top-actu-left").hover(
      function() {
      $(this).html("").css('background-color', 'rgb(86, 70, 70)').
      $(this).css("width", "40%").css("height", "100%");
  },
  function() {
      $(this).html("").append(`<img src="./IMG/top-actu-1.jpg" alt="image-ecolo">`)
      $(".top-actu-left img").css("width", "100%").css("height", "100%").css("object-fit", "cover");
  })

   



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