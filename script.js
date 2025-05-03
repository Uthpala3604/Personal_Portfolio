$(document).ready(function(){

    // Toggle menu
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    // Remove toggle on scroll or load
    $(window).on('scroll load', function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      // Show/hide scroll to top button
      $(window).scrollTop() > 0 ? $('.top').show() : $('.top').hide();
    });
  
    // Smooth scrolling for all links
    $('a[href*="#"]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
      );
    });
  
    // Form submission handling
    $('form').submit(function(e){
      e.preventDefault();
      // Get form values
      const name = $('input[name="name"]').val();
      const email = $('input[name="email"]').val();
      const subject = $('input[name="subject"]').val();
      const message = $('textarea[name="message"]').val();
      
      // Simple validation
      if(name && email && subject && message) {
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert(`Thank you ${name}! Your message has been sent successfully. I'll contact you soon at ${email}`);
        
        // Reset form
        this.reset();
      } else {
        alert('Please fill all fields');
      }
    });
  
    // Initialize scroll spy
    $(window).scroll(function() {
      const scrollPos = $(document).scrollTop();
      
      $('nav a').each(function() {
        const currLink = $(this);
        const refElement = $(currLink.attr('href'));
        
        if (refElement.position().top <= scrollPos + 100 && 
            refElement.position().top + refElement.height() > scrollPos) {
          $('nav a').removeClass('active');
          currLink.addClass('active');
        }
      });
    });
  
    // Portfolio item click handler
    $('.portfolio .box').click(function() {
      const projectTitle = $(this).find('h3').text();
      console.log(`Project clicked: ${projectTitle}`);
      // You could add modal functionality here
    });
  
    // Animation on scroll
    $(window).scroll(function() {
      $('.box').each(function() {
        const position = $(this).offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        
        if(position < scrollPosition) {
          $(this).addClass('animated');
        }
      });
    });
  
  });