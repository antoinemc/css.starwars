function ad(){
	var pub = ".pub";

    // Calcul de la marge entre le haut du document et .pub
    fixedLimit = pub.offset().top - parseFloat(pub.css('marginTop').replace(/auto/,20));
	 $(window).trigger('scroll');
	 $(window).scroll(function(event){
        // Valeur de défilement lors du chargement de la page
        windowScroll = $(window).scrollTop();
 
        // Mise à jour du positionnement en fonction du scroll
        if( windowScroll >= fixedLimit ){
            pub.addClass('fixed');
        } else {
            pub.removeClass('fixed');
        }
    });
}