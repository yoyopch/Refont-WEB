$(document).ready(init);

function init(){
    AllTexte();
}

// ajout de texte à la page
function AllTexte(){
    $(".fond").html(" <img id = 'img_bg' src='IMG/dechets/fond2.jpg' alt='Déchets'> ")
    $("#chemin").html(" <p><a href='index.html'>Accueil</a> > <a href='gestion.html'>Organisation de nos déchets</a></p> ");
    $("#titre").text('Organisation des déchets');
    $("#carte").append(`
        <div id = "carte_txt">
            <p>Pour plus de renseignements, vous pouvez contacter :<br>
            Tél : 0 800 130 132<em> (N° vert appel gratuit)</em><br>
            Horaires:<br> Du lundi au jeudi : 8h30 - 12h00 ; 13h30 - 17h00<br>
            Le vendredi : 8h30 - 12h00 ; 13h30 - 16h00<br>
            Service collecte et valorisation des déchets :<br>
            <a href='https://www.dechets@agglo.morlaix.fr'>dechets@agglo.morlaix.fr</a>
            </p> <br>
        </div>
        <div id = "map">
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21113.083506711293!2d-3.8152923502579106!3d48.58810553476892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481163fd1615ebb3%3A0x2882271c14aae1e0!2sD%C3%A9ch%C3%A8terie%20de%20Morlaix!5e0!3m2!1sfr!2sfr!4v1697994725996!5m2!1sfr!2sfr' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
        </div>
    `);
    $(".cat-1").append(`
        <img src="IMG/dechets/cat-1.jpg" alt="Morlaix">
        <div id = "text">Morlaix, ville propre</div>
    `);
    $(".cat-2").append(`
        <div id = "text2">Déchets et encombrants</div>
        <img src="IMG/dechets/cat-2.jpg" alt="Déchets et encombrants">    
    `);
    $(".cat-3").append(`
        <div id = "text3">Collecte de déchets</div>
        <img src="IMG/dechets/cat-3.jpg" alt="collecte de déchets">
    `);
    $(".cat-4").append(`
        <div id = "text4">Opération de nettoyage</div>
        <img src="IMG/dechets/cat-4.jpg" alt="Opération de nettoyage">
    `);
    $(".cat-5").append(`
        <div id = "text5">Point d'apport volontaire <em>(PAV)</em></div>
        <img src="IMG/dechets/cat-5.jpg" alt="PAV">
    `);
}