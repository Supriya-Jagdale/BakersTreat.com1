
//  ****************** Gallary JS Code ****************** 
$(function (){

      var links = $("section.select-bar ul.nav a");
      var items = $("section.select-bar div.items div.item");

      links.click(function(){

            links.removeClass("selected");
            $(this).addClass("selected");
            items.removeClass("selecteditem");
            items.parent().find(".item-" + $(this).attr("rel")).addClass("selecteditem");

      });

});

//  ****************** Modal Popup JS Code ****************** 
$(function (){
$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){ 
      var o=$(this).attr("data-easein");
      "shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});
});


//  ****************** Cake Quanity JS Code ****************** 
function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
}
    
function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
}


//  ****************** Cake Card JS Code ****************** 
$(document).ready(function() {
      var setCardStyle = function(){
    
            var card = $('.card');
            var cardWidth = card.width();
            //  card.css("height", "500");
            var cardHeight = card.height();
            card.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1)');
  
            
            card.mouseover(function(){
                  card.mousemove(function(e){
                  
                        // Find mouse X position in card
                        mouseScreenPositionX = e.pageX;
                        cardLeftPosition = card.offset().left;
                        mousePosX = ((mouseScreenPositionX - cardLeftPosition)/cardWidth);
                        matrix3dX = ((mousePosX/10000)*1.5)-0.0001;
              
                        // Find mouse Y position in card
                        mouseScreenPositionY = e.pageY;
                        cardTopPosition = card.offset().top;
                        mousePosY = ((mouseScreenPositionY-cardTopPosition)/cardHeight);
                        matrix3dY = ((mousePosY/10000)*1.5)-0;
              
                        card.css('transform', 'translate3d(0,0,0) matrix3d(1,0,0.00,'+matrix3dX+',0.00,1,0.00,'+matrix3dY+',0,0,1,0,0,0,0,1)');
                  });
            })

            .mouseout(function(){
                  card.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1)');
            });
      }

      setCardStyle();
      $(window).on('resize', function(){
            setCardStyle();
      });
});