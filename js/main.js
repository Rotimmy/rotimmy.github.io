

$(document).ready(function(){

  // nav affix
  $(window).on('scroll', function(){

    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#about').offset().top,
        distance      = (elementOffset - scrollTop);

    if ( distance <= 0 ) {
      $('.navbar').addClass('nav-fix');
    } else if ( distance > 0 ) {
      $('.navbar').removeClass('nav-fix');
    };
  });

  // smooth scroll
  $('a.nav-link, a.down-arrow, a.up-arrow, a.navbar-brand, #headingThree a').on('click', function(e){
    if (this.hash !== ''){
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // collapse symbol

  $('#background .btn-link').on('click', function(){
    if ($('#background span').hasClass('plus')) {
      $('#background span').addClass('minus');
      $('#background span').removeClass('plus');
    } else if ($('#background span').hasClass('minus')){
      $('#background span').addClass('plus');
      $('#background span').removeClass('minus');
    };
  });

  $('#skills .btn-link').on('click', function(){
    if ($('#skills span').hasClass('plus')) {
      $('#skills span').addClass('minus');
      $('#skills span').removeClass('plus');
    } else if ($('#skills span').hasClass('minus')){
      $('#skills span').addClass('plus');
      $('#skills span').removeClass('minus');
    };
  });

  // projects mouseover
  $('#projects img').on('mouseover', function(e){
    e.preventDefault();

    if ($(this).hasClass('levine')) {
      $('#projectName').text('marclevine.org').attr('href', 'https://www.marclevine.org');
    } else if ($(this).hasClass('lovelee')) {
      $('#projectName').text('beccasloveleelashes.com').attr('href', 'https://www.beccasloveleelashes.com');
    } else if ($(this).hasClass('leftfield')) {
      $('#projectName').text('leftfield.club').attr('href', 'https://www.leftfield.club');
    };

    $(this).animate( {
      width: '200px'
      }, 300,
      function() {
        $(this).on('mouseleave', function(){

          $(this).animate({
            width: '160px'
          }, 100);

        })
      });

    });

  // design blinker

  var interval, i = 0, design = ['d','e','s','i','g','n'];

  var colors = [
    {
      d:'#C690E5',
      e:'white',
      s:'white',
      i:'black',
      g:'#C690E5',
      n:'black'
    },
    {
      d:'#c5fffe',
      e:'#c5fffe',
      s:'#c5fffe',
      i:'#8edefd',
      g:'#a78bfc',
      n:'#27466f'
    },
    {
      d:'#fff',
      e:'#FFEAE5',
      s:'#FFD5CC',
      i:'#FFAB99',
      g:'#FF8166',
      n:'#FF5733'
    },
    {
      d:'#C5A1DC',
      e:'#AC8DC1',
      s:'#9479A5',
      i:'#7B6589',
      g:'#63516E',
      n:'#4A3C52'
    },
    {
      d:'#FFAB03',
      e:'#FFAB03',
      s:'#FC7F03',
      i:'#FC3903',
      g:'#D1024E',
      n:'#A6026C'
    }
  ];

  setInterval(function(){

  var z = Math.floor(Math.random() * colors.length);
  console.log(colors[z]);

    $('.letter').css({opacity: 1.0}).animate(
      {opacity:0},
      200,
      function (){
        $('#d').css('color', colors[z].d).animate(
          {opacity:1.0},
          50,
          function (){
            $('#e').css('color',colors[z].e).animate(
              {opacity:1.0},
              50,
              function (){
                $('#s').css('color',colors[z].s).animate(
                  {opacity:1.0},
                  50,
                  function (){
                    $('#i').css('color',colors[z].i).animate(
                      {opacity:1.0},
                      50,
                      function (){
                        $('#g').css('color',colors[z].g).animate(
                          {opacity:1.0},
                          50,
                          function (){
                            $('#n').css('color',colors[z].n).animate(
                              {opacity:1.0},
                              50
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );

  }, 3000);


});
