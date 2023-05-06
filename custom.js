// navbar scrolling

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

// AOS Animation

    AOS.init();

    // counter js

    $(function(){
        $('#demo').counto(843);
      });


      $(function(){
          $('#demo').counto(1, 843);
        });

        $('#my-number').counto(1, 843,function(){
            alert('Done!');
          });

         
          
        
       
