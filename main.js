const menuemail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');

menuemail.addEventListener('click' , toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    
    DesktopMenu.classList.toggle('inactive');
  }
  
  function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }