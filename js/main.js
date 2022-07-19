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

const arrCart = [
  {
    id: 1,
    img: './img/zooov/zooov-1.jpg',
    title: 'Для взрослых собак',
    subtitle: 'Индейка/Говядина',
    text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
    textCalc: '700г / 500г / 300г / 150г / 100г',
    link: 'Заказать',
    link2: 'https://s1.1zoom.ru/big0/125/421469-svetik.jpg',
    target: '_blank',
  },
  {
    id: 2,
    img: './img/zooov/zooov-2.jpg',
    title: 'Для щенков',
    subtitle: 'Индейка/Говядина',
    text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
    textCalc: '700г / 500г / 300г / 150г / 100г',
    link: 'Заказать',
    link2: 'https://s1.1zoom.ru/big0/849/422904-blackangel.jpg',
    target: '_blank',
  },
  {
    id: 3,
    img: './img/zooov/zooov-3.jpg',
    title: 'Для взрослых собак',
    subtitle: 'Баранина/Кролик',
    text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
    textCalc: '700г / 500г / 300г / 150г / 100г',
    link: 'Заказать',
    link2: 'https://s1.1zoom.ru/big0/906/422248-svetik.jpg',
    target: '_blank',
  },
  {
    id: 4,
    img: './img/zooov/zooov-4.jpg',
    title: 'Для щенков',
    subtitle: 'Баранина/Кролик',
    text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
    textCalc: '700г / 500г / 300г / 150г / 100г',
    link: 'Заказать',
    link2: 'https://s1.1zoom.ru/big0/639/421174-svetik.jpg',
    target: '_blank',
  },
];

for (let i = 0; i < arrCart.length; i++) {
  let box = document.querySelector('.zooov__box');
  let cart = document.createElement('div');
  let divImg = document.createElement('div');
  let img = document.createElement('img');
  let title = document.createElement('h3');
  let subtitle = document.createElement('h4');
  let text = document.createElement('p');
  let textCalc = document.createElement('h5');
  let link = document.createElement('a');
  
  divImg.textContent = arrCart[i].divImg;
  img.setAttribute('src', arrCart[i].img);
  title.textContent = arrCart[i].title;
  subtitle.textContent = arrCart[i].subtitle;
  text.textContent = arrCart[i].text;
  textCalc.textContent = arrCart[i].textCalc;
  link.textContent = arrCart[i].link;
  link.href = arrCart[i].link2;
  link.target = arrCart[i].target;

  divImg.appendChild(img);
  cart.append(divImg);
  cart.append(title);
  cart.append(subtitle);
  cart.append(text);
  cart.append(textCalc);
  cart.append(link);
  
  cart.className = 'zooov__box-cart';
  divImg.className = 'zooov__cart-image';
  title.className = 'zooov__cart-title';
  subtitle.className = 'zooov__cart-subtitle';
  text.className = 'zooov__cart-text';
  text.classList.add('--text');
  title.classList.add('--subtitle');
  textCalc.className = 'zooov__cart-heft';
  link.className = 'zooov__cart-link';

  box.appendChild(cart);
  

}

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



