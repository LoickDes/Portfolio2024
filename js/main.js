window.onload = function() {
  var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
  shadowRoot.querySelector('#logo').remove();
}

$(document).ready(function(){

  let x;
  let y;

  $('#contact>a').mousemove(function(event){
    x=event.pageX - $("#contact>a").offset().left;
    y=event.pageY - $("#contact>a").offset().top;
    $('#contact>a>span:first-child').css('margin-left','2vw');
 
    $('#contact>a img').css({
      top:y + 'px',
      left:x + 'px',
      animation:'in ease 0.5s forwards',
  
    });
   
  }).mouseleave(function(){
    $('#contact>a>span:first-child').css('margin-left','0');
    $('#contact>a img').css({
      animation:'out ease 0.5s forwards'
    
    });
  });

    $('#menu').click(function(){
      $('.links').css({
       animation:'linksopen ease 0.5s forwards'
      })
      $('.links *').hide().fadeIn(500);
      
    });

    $('nav a, .links>span').click(function(){

      $('.links').css({
       animation:'linksclose ease 0.5s forwards' 
      })
      $('.links *').fadeOut(200);
      
    })

   
      $('nav a').each(function() {
        let $link = $(this);
        let $image = $link.find('.screenshots');
        let $text = $link.find('span:first-child');
    
        $link.mousemove(
          function(event){
            x=event.pageX - $link.offset().left;
            y=event.pageY - $link.offset().top;
            $text.css('margin-left','2vw')
            $image.css({
              scale:'1',
              top:y+'px',
              left:x+'px',
              animation:'linkin ease 0.5s forwards'
            });
          }).mouseleave(function(){
            $text.css('margin-left','0');
            $image.css({
              scale:'0',
              animation:'linkout ease 0.5s forwards'
            })
          })
      });
      

  });


  