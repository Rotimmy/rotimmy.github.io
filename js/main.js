$(document).ready(function(){

  // nav affix
  $(window).on('scroll', function(){

    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#portfolio').offset().top,
        distance      = (elementOffset - scrollTop);

    if ( distance <= 0 ) {
      $('a.navbar-brand').addClass('nav-fix');
    } else if ( distance > 0 ) {
      $('a.navbar-brand').removeClass('nav-fix');
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
  $('#projects a').on('mouseover', function(){

    let url = $(this).attr('href');
    let projectName = url.replace('https://www.', '');
        console.log(projectName);

    $('#projectName').text(projectName).attr('href', url);
    //
    // if ($(this).hasClass('levine')) {
    //   $('#projectName').text('marclevine.org').attr('href', 'https://www.marclevine.org/');
    // } else if ($(this).hasClass('olivieri')) {
    //   $('#projectName').text('victorforsf.com').attr('href', 'https://www.victorforsf.com/');
    // } else if ($(this).hasClass('butt')) {
    //   $('#projectName').text('tombuttforrichmond.com').attr('href', 'https://www.tombuttforrichmond.com/');
    // } else if ($(this).hasClass('tung')) {
    //   $('#projectName').text('nancytung2019.com').attr('href', 'https://www.nancytung2019.com/');
    // };


  });

  // brand blinker
  //
  // var interval, i = 0;
  //
  // var colors = [
  //   {
  //     d:'#C690E5',
  //     e:'white',
  //     s:'white',
  //     i:'black',
  //     g:'#C690E5',
  //     n:'black'
  //   },
  //   {
  //     d:'white',
  //     e:'white',
  //     s:'white',
  //     i:'white',
  //     g:'white',
  //     n:'white'
  //   },
  //   {
  //     d:'#c5fffe',
  //     e:'#c5fffe',
  //     s:'#c5fffe',
  //     i:'#8edefd',
  //     g:'#a78bfc',
  //     n:'#27466f'
  //   }
  // ];
  //
  // setInterval(function(){
  //
  // var i = Math.floor(Math.random() * colors.length);
  // console.log(colors[i]);
  //
  //   $('.letter').css({opacity: 1.0}).animate(
  //     {opacity:0},
  //     200,
  //     function (){
  //       $('#d').css('color', colors[i].d).animate(
  //         {opacity:1.0},
  //         50,
  //         function (){
  //           $('#e').css('color',colors[i].e).animate(
  //             {opacity:1.0},
  //             50,
  //             function (){
  //               $('#s').css('color',colors[i].s).animate(
  //                 {opacity:1.0},
  //                 50,
  //                 function (){
  //                   $('#i').css('color',colors[i].i).animate(
  //                     {opacity:1.0},
  //                     50,
  //                     function (){
  //                       $('#g').css('color',colors[i].g).animate(
  //                         {opacity:1.0},
  //                         50,
  //                         function (){
  //                           $('#n').css('color',colors[i].n).animate(
  //                             {opacity:1.0},
  //                             50
  //                           );
  //                         }
  //                       );
  //                     }
  //                   );
  //                 }
  //               );
  //             }
  //           );
  //         }
  //       );
  //     }
  //   );
  //
  // }, 3000);
  //
});
