// $(document).ready(function(){
//     $('.header-nav__burger').click(function(event){
//         $('.header-nav__burger', '.navbar-list').toggleClass('active');
//     });
// });
$(document).ready(function(){
    $('.header-nav__burger').click(function(event){
        $('.header-nav__burger,.navbar-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('nav.navbar-list a').click(function(event){
        $('.header-nav__burger,.navbar-list').removeClass('active');
        $('body').removeClass('lock');
    })
});


$('nav.navbar-list a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.header-nav__icon a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.footer-content__navbar a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.content__block-faq a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Увиличение товара
  // Удаление товара
  // Вывод корзины модальным окном

  let openShopping = document.querySelector('.cart');
  let closeShopping = document.querySelector('.closeShopping');
  let list = document.querySelector('.block-catalogs__blocks');
  let listCard = document.querySelector('.listCard');
  let body = document.querySelector('body');
  let total = document.querySelector('.total');
  let depositt = document.querySelector('.deposit')
  let quantity = document.querySelector('.quantity');
  let deleteCard = document.querySelector('.delete-card');
  
 

  openShopping.addEventListener('click', ()=>{
        $('body').addClass('active');
  });
  closeShopping.addEventListener('click', ()=>{
        $('body').removeClass('active');
  });

  

  // function openCart (){
  //   openShopping.addEventListener('click', ()=>{
  //       $('body').addClass('active');
  //     });
  // };

  // function closeCart (){
  //   openShopping.addEventListener('click', ()=>{
  //       $('body').removeClass('active');
  //     });
  // };


  function disableScroll(){
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  };
  function enableScroll(){
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto'
    body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    body.removeAttribute('data-position');
  };


  
  openShopping.addEventListener('click', (e)=>{
    disableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    closeShopping.style.pointerEvents = 'auto';
  });

  closeShopping.addEventListener('click', (e)=>{
    enableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    openShopping.style.pointerEvents = 'auto';
  });


  let products = [
      {
          id: 1,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
          id: 2,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
          id: 3,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
          id: 4,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
          id: 5,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
          id: 6,
          name: 'Шуруповерт HITACHI DS14DVF3',
          description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
          image: 'product2.jpg',
          price: 400,
          deposit: 3400
      },
      {
        id: 7,
        name: 'Шуруповерт HITACHI DS14DVF3',
        description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
        image: 'product2.jpg',
        price: 400,
        deposit: 3400
    },
    {
        id: 8,
        name: 'Шуруповерт HITACHI DS14DVF3',
        description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
        image: 'product2.jpg',
        price: 400,
        deposit: 3400
    },
    {
        id: 9,
        name: 'Шуруповерт HITACHI DS14DVF3',
        description: '0-1200 об/мин | Тип патрона: БЗП | Реверс: есть | Аккумулятор: 14.4 В./1.4 Ач., 2шт. ',
        image: 'product2.jpg',
        price: 400,
        deposit: 3400
    }
  ];

 

  let listCards  = [];
  function initApp(){
      products.forEach((value, key) =>{
          let newDiv = document.createElement('div');
          newDiv.classList.add('blocks-info');
          newDiv.innerHTML = `
            <div class="blocks-info__price">
                <div class="blocks-info__price-txt">Цена: ${value.price.toLocaleString()} р. | Залог: ${value.deposit} р.</div>
                <div class="blocks-info__img"><img src="img/main-img/${value.image}"></div>
            </div>
            <div class="blocks-info__brand">${value.name}</div>
            <div class="blocks-info__description">${value.description}</div>
            <button onclick="addToCard(${key}),addToModal(${key})">Add To Card</button>`;
          list.appendChild(newDiv);
      })
  }
  initApp();
  function addToCard(key){
      if(listCards[key] == null){
          // copy product form list to list card
          listCards[key] = JSON.parse(JSON.stringify(products[key]));
          listCards[key].quantity = 1;
      }
      reloadCard();
  }
  
  function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let totalDeposit = 0
    listCards.forEach((value, key)=>{
        totalDeposit = totalDeposit + value.deposit;
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.classList.add('list-block');
            newDiv.innerHTML = `
                <div><img src="img/main-img/${value.image}"/></div>
                <div class='block-normal-box'>
                  <div class='price-list-cart'>${value.name}</div>
                  <div class='name-list-cart'>${value.price.toLocaleString()}р.</div>
                  <button onclick="changeQuantity(${key}), deleteModalQuantity(${key})" class='delete-card'>X</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    });
    total.innerText = 'Цена: ' + totalPrice.toLocaleString() + 'р.';
    depositt.innerText = 'Залог: ' + totalDeposit.toLocaleString() + 'р.';
    quantity.innerText = count;
    };

    function changeQuantity(key){
        delete listCards[key]; 
      reloadCard();
    }



//!modal window

let modal = document.querySelector('.modal');
let closeBtnModal = document.querySelector('.btn-close');
let btnOpenModal = document.querySelector('.btn-open-modal');
let removeCart = document.querySelector('body');
let orderModalBtn = document.querySelector('.order-modal__btn');
let orderModalList = document.querySelector('.order-modal__list');
let totalModal = document.querySelector('.order-modal__summ span');
let depositModal = document.querySelector('.order-modal__deposit span');
let quantityModal = document.querySelector('.order-modal__quantity span');

btnOpenModal.addEventListener('click', () => {
    modal.classList.add('active-modal');
    removeCart.classList.remove('active');
    removeCart.classList.remove('disable-scroll');
    enableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    openShopping.style.pointerEvents = 'auto';
    // disableScroll();
    // e.currentTarget.style.pointerEvents = 'none';
    // closeShopping.style.pointerEvents = 'auto';
});
closeBtnModal.addEventListener('click', () =>{
    modal.classList.remove('active-modal');
    openShopping.style.pointerEvents = 'auto';
    // enableScroll();
    // e.currentTarget.style.pointerEvents = 'none';
    // openShopping.style.pointerEvents = 'auto';
});


let flag = 0;
orderModalBtn.addEventListener('click', (e) => {
    if (flag == 0){
        orderModalBtn.classList.add('open');
        orderModalList.style.display = 'block';
        flag = 1;
    } else{
        orderModalBtn.classList.remove('open');
        orderModalList.style.display = 'none';
        flag = 0;
    }
});



let modalLists = [];
function addToModal(key){
  if(modalLists[key] == null){
      // copy product form list to list card
      modalLists[key] = JSON.parse(JSON.stringify(products[key]));
      modalLists[key].quantityModal = 1;
  };
  reloadModal();
}
function reloadModal(){
  orderModalList.innerHTML = '';
  let totalPriceModal = 0;
  let totalDepositModal = 0;
  let countModal = 0;
  modalLists.forEach((value, key)=>{
      totalDepositModal = totalDepositModal + value.deposit;
      totalPriceModal = totalPriceModal + value.price;
      countModal = countModal + value.quantityModal;
      console.log(totalDepositModal, totalPriceModal, countModal);
      if(value != null){
        let newLi = document.createElement('li');
          newLi.classList.add('order-product');
          newLi.innerHTML = `
            <article class="order-product__product">
                <img src="img/main-img/${value.image}" alt="" class="order-product__img">
                  <div class="order-product__text">
                    <h3 class="order-product__title">${value.name}</h3>
                    <span class="order-product__price">${value.price.toLocaleString()}р.</span>
                  </div>
                <button onclick="changeQuantity(${key}), deleteModalQuantity(${key})" class="order-product__delete">Удалить</button>
            </article>`;
        orderModalList.appendChild(newLi);  
      };
  });
  
    totalModal.innerText = totalPriceModal.toLocaleString() + 'р.';
    depositModal.innerText = totalDepositModal.toLocaleString() + 'р.';
    quantityModal.innerText = countModal + 'шт.';
};

function deleteModalQuantity(key){
  delete modalLists[key]; 
reloadModal();
}