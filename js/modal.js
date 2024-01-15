let modal = document.querySelector('.modal');
let closeBtnModal = document.querySelector('.btn-close');
let btnOpenModal = document.querySelector('.btn-open-modal');
let removeCart = document.querySelector('body');

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

// function disableScroll(){
//     let pagePosition = window.scrollY;
//     removeCart.classList.add('disable-scroll');
//     removeCart.dataset.position = pagePosition;
//     removeCart.style.top = -pagePosition + 'px';
//   };
//   function enableScroll(){
//     let pagePosition = parseInt(removeCart.dataset.position, 10);
//     removeCart.style.top = 'auto'
//     removeCart.classList.remove('disable-scroll');
//     window.scroll({top: pagePosition, left: 0});
//     removeCart.removeAttribute('data-position');
//   };

