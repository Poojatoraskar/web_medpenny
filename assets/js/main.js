$('.banner-owl-carousel ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function toggleNavBar(){

  console.log("hii")
  var headerRight =  document.getElementById('headerRightformobile');

  console.log(headerRight.style.display,'headerRight.style.display')

  headerRight.classList.toggle("header-for-mobile");
}



// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }





// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   infinite: true,
//   focusOnSelect: true,
//   cssEase: 'linear',
//   touchMove: true,
//   prevArrow:'<button class="slick-prev"> < </button>',
//   nextArrow:'<button class="slick-next"> > </button>',
  
  
// });


// var imgs = $('.slider img');
// imgs.each(function(){
//   var item = $(this).closest('.item');
//   item.css({
//     'background-image': 'url(' + $(this).attr('src') + ')', 
//     'background-position': 'center',            
//     '-webkit-background-size': 'cover',
//     'background-size': 'cover', 
//   });
//   $(this).hide();
// });



$(document).ready(function(){
  $(".Pricing-bottom-left").hover(function(){
    $(this).css("background-color", "black");
      $(".textwhite").css("color", "white");
      $(".texthoverred").css("color","white")
    }, function(){
    $(this).css("background-color", "white");
     $(".textwhite").css("color", "black");
     $(".texthoverred").css("color","#E44240")
  });
});

$(document).ready(function(){
  $(".Pricing-bottom-center").hover(function(){
    $(this).css("background-color", "black");
      $(".textwhitetwo").css("color", "white");
      $(".texthoverredd").css("color","white")
    }, function(){
    $(this).css("background-color", "white");
     $(".textwhitetwo").css("color", "black");
     $(".texthoverredd").css("color","#E44240")
  });
});

$(document).ready(function(){
  $(".Pricing-bottom-right").hover(function(){
    $(this).css("background-color", "black");
      $(".textwhitetthree").css("color", "white");
      $(".texthoverredt").css("color","white")
    }, function(){
    $(this).css("background-color", "white");
     $(".textwhitetthree").css("color", "black");
     $(".texthoverredt").css("color","#E44240")
  });
});
