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
  
  openShopping.addEventListener('click', ()=>{
      $('body').toggleClass('active');
      $('body').toggleClass('lock');
  })
  closeShopping.addEventListener('click', ()=>{
      body.classList.remove('active');
  })
  
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

  $(document).ready(function(){
    if($('card').classList.contains('active')){
        $('body').addClass('lock');
    }else{
        $('body').removeClass('lock');
    }
  })

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
            <button onclick="addToCard(${key})">Add To Card</button>`;
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
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}р.</div>
                <div class="card-button">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Цена: ' + totalPrice.toLocaleString() + 'р.';
    depositt.innerText = 'Залог: ' + totalDeposit.toLocaleString() + 'р.';
    quantity.innerText = count;
  }
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
        listCards[key].deposit = quantity * products[key].deposit;
    }
    reloadCard();
  }