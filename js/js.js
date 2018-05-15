window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.showcase-bnt', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom',
});
sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'bottom',
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    viewFactor: 0.2 // this show how many persont of the element viewed to make the animation
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    viewFactor: 0.2
});

$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });