let burgerBlock = document.querySelector('.header__burger');
let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__block-nav');



burgerBlock.addEventListener('click', miFunction);

function miFunction() {
  burger.classList.toggle('burger-active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

// ===============================================================
$('.slyder__box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

// ===============================================================

let accordioBlockClick = document.querySelectorAll('.accordion__box-top');
let accordionHidden = document.querySelectorAll('.accordion__box-hidden');


for (let i = 0; i < accordioBlockClick.length; i++) { 
  accordioBlockClick[i].onclick = function () {
		accordionHidden[i].classList.toggle('accordion__box-hidden--active');
		accordioBlockClick[i].classList.toggle('accordion__box-top--active');
	} 
  
}


// ===============================================================



