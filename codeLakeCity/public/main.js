
$(document).ready(function(){
  $("html, body").animate({ scrollTop: "0px" });
  $('.theMenu').hide()
  $('.rightInfo').hide()
  $('.leftInfo').hide()
  $('.centerInfo').hide()
  $('.classModal').hide()
  $('.modalCover').hide()


  $(document).on('scroll', function(){
    $('.one').css({'margin-right': $(this).scrollTop()})
    $('.two').css({'margin-bottom': $(this).scrollTop(), 'margin-bottom': $(this).scrollTop()})
    $('.three').css({'margin-left': $(this).scrollTop()})
    $('.four').css({'margin-top': $(this).scrollTop()*4})
    $('.oneL').css({'margin-right': $(this).scrollTop(), 'margin-bottom': $(this).scrollTop()})
    $('.threeK').css({'margin-left': $(this).scrollTop(), 'margin-bottom': $(this).scrollTop()})
    $('.twoA').css({'margin-bottom': $(this).scrollTop() * 2})
    $('.threeD').css({'margin-left': $(this).scrollTop(), 'margin-top': $(this).scrollTop()*2})
    $('.oneC').css({'margin-right': $(this).scrollTop(), 'margin-top': $(this).scrollTop()*2})

  if($(this).scrollTop() > 200){
    $('.rightInfo').slideDown()
  }
  else {
    $('.rightInfo').slideUp()
  }
  if($(this).scrollTop() > 201){
    $('.centerInfo').slideDown()
  }
  else {
    $('.centerInfo').slideUp()
  }
  if($(this).scrollTop() > 202){
    $('.leftInfo').slideDown()
  }
  else {
    $('.leftInfo').slideUp()
  }
  // if($(this).scrollTop() > 600){
  //   $('.reserveSeatOne').fadeIn()
  // }
  // else {
  //   $('.reserveSeatOne').fadeOut()
  // }


  })

  $('.logo').on('click', function(){
    $("html, body").animate({ scrollTop: "0px" });
  })

  $('.mission').on('click', function(){
    var testing = $('.missionSection').offset().top
    $("html, body").animate({ scrollTop:  testing-63});
  })
  $('.classes').on('click', function(){
    var testing = $('.classSection').offset().top
    $("html, body").animate({ scrollTop:  testing-78});
  })
  $('.reserveSeatOne').on('click', function(){
    $('.classModal').slideDown()
    $('.modalCover').fadeIn()

  })
  $('.reserveSeatTwo').on('click', function(){
    $('.classModal').slideDown()
    $('.modalCover').fadeIn()

  })
  $('.modalCover').on('click', function(){
    $('.classModal').slideUp()
    $('.modalCover').fadeOut()

  })
  $('.theX').on('click', function(){
    $('.classModal').slideUp()
    $('.modalCover').fadeOut()

  })
  $('.about').on('click', function(){
    var testing = $('.aboutSection').offset().top
    $("html, body").animate({ scrollTop:  testing-78});
  })
  $('.contact').on('click', function(){
    var testing = $('.contactSection').offset().top
    $("html, body").animate({ scrollTop:  testing-78});
  })

  var flag = false
  var Menu = {

  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },

  init: function() {
    Menu.bindUIactions();
  },

  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },

  activateMenu: function() {
    if(!flag){
      $('.theMenu').slideDown()
      flag = true;
    }
    else if(flag){
      $('.theMenu').slideUp()
      flag = false;
    }
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click');
  }
};

Menu.init();
})
