const burger = document.querySelector('.header__burger');
const hoverMenu = document.querySelector('.header__hoverMenu');
burger.addEventListener('click',function(){
  let header_all_active_class = [
    $('.header__burger'),
    $('.header__menu'),
    $('body'),
  ]
  header_all_active_class.forEach(addActiveClass =>{
    addActiveClass.toggleClass('active');
  })
})

hoverMenu.addEventListener('click', function(){
  $('.hoverMenu').toggleClass('active');
})
$('.mainSlider__slider').slick({
	arrows:true,
	dots: true,
	autoplay: true,
  autoplaySpeed: 5000,
});
$('.popular__slider').slick({
	  slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
        {
            breakpoint:770,
            settings:{
                 slidesToShow: 2,
                 slidesToScroll: 2,
            }
        },
        {
            breakpoint:500,
            settings:{
                 slidesToShow: 1,
                 slidesToScroll: 1,
            }
        },
    ]
});
$('.quotes__slider').slick({
    draggable:false,
    swipe:false,
    nextArrow: $('.quotes__arrow'),
});
const arrowRotate = document.querySelector('.quotes__arrow');
const arrowRotate1 = document.getElementById('a');
let deg = 0
arrowRotate.addEventListener('click',function(){
   deg += 360;
   // arrowRotate1.style.transform = 'translate(-50%,-30%)';
    arrowRotate1.style.transform = 'translate(-50%,-30%) rotate('+deg+'deg)';
  
})




//arrowRotate1.style.transform = 'translate(-50%,-30%)';
//arrowRotate1.style.transform += 'rotate('+360+'deg)';




//$('.quotes__arrow').remove('click');
    

 // click++;
  //if((click%2) == 0){
   //   $('.quotes__arrow').removeClass('click');
    //  alert(2);
 // }else{
 //   $('.quotes__arrow').addClass('click');
 // }