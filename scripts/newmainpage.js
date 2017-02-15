$(document).ready(function(){

var elementsToChangeOpacity = ["#topbar-waypoint", "#pic1-waypoint", "#skills-table-waypoint", "#skills-table-mobile-waypoint","#pic3-waypoint", "#pic4-waypoint", "#introtext-waypoint","#pic2-waypoint"]; 
    
var fadeInElement = function(elementToFade){
        $(elementToFade).waypoint({
            handler: function() { 
                $(elementToFade).css({"opacity":"1","transition":"all 2s"})}, 
            offset: '50%'
            })                    
            return elementToFade;
}

var fadeIn = function(){
        for (var i = 0; i < elementsToChangeOpacity.length; i++){
            var elementToFade = elementsToChangeOpacity[i];
            if (elementToFade === "#pic1-waypoint") {
                $(elementToFade).css({"opacity":"1","transition":"all 2s"})   
            }
            else if (elementToFade === "#topbar-waypoint"){
                $(elementToFade).css({"opacity":"1","transition":"all 2s","transition-delay":"1s"});
            }    
            else {
                fadeInElement(elementToFade);
            }
    }
}   

fadeIn();

$('#footerToTopButton').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 2000);
        return false;
});

});
