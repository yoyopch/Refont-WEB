$(init);


function init() {

    $(".texte-carousel, .carousel-item img, .carousel-item h1").on("mouseover", function () {
        $(".carousel-item img").css({
            "filter": "blur(5px) brightness(0.5)"
        }).css("transition", "1s");
        $(".texte-carousel, .carousel-item h1").css("display", "block").css("transition", "2s");
    })

    $(".texte-carousel, .carousel-item img, .carousel-item h1").on("mouseout", function () {
        $(".carousel-item img").css("filter", "none");
        $(".texte-carousel, .carousel-item h1").css("display", "none");
    })

    $(".mairie").on("click", function () {
        $("#map").html(`
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659.919218567817!2d-3.8284619671603943!3d48.57773729157136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811612c5562a4e9%3A0xaa001686308ada11!2sMairie%20de%20Morlaix!5e0!3m2!1sfr!2sfr!4v1698098349168!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    })

    $(".hosp ").on("click", function () {
        $("#map").html(`
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.099013718087!2d-3.832698323040667!3d48.569652371294495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481166d16f412f8b%3A0x2b77111ded0e98b7!2sCentre%20Hospitalier%20des%20Pays%20de%20Morlaix!5e0!3m2!1sfr!2sfr!4v1698098742429!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    })

    $(".fina").on("click", function () {
        $("#map").html(`
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.9450534904273!2d-3.819245646077386!3d48.57579247416806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481167385fd563f1%3A0x8e165a177617461b!2sCentre%20des%20finances%20publiques!5e0!3m2!1sfr!2sfr!4v1698098778565!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    })

    $(".trib").on("click", function () {
        $("#map").html(`
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.9450534904273!2d-3.819245646077386!3d48.57579247416806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481167385fd563f1%3A0x8e165a177617461b!2sCentre%20des%20finances%20publiques!5e0!3m2!1sfr!2sfr!4v1698098778565!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.9374262953628!2d-3.8241464484535093!3d48.576487315741176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481166d1fe1e02cd%3A0x53cbdedcf00db80e!2sTribunal%20d&#39;instance!5e0!3m2!1sfr!2sfr!4v1698098803730!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    })
}