sidenav = document.querySelector('.sidenavigator');
burger = document.querySelector('.burger');

sidenavitem = document.querySelectorAll('.sidenavigation__item');

burger.addEventListener('click', function(){
    sidenav.classList.toggle('sidenav__active');
    burger.classList.toggle('burgeractive');
});

sidenavitem.forEach(function(node){
    node.addEventListener('click', function(){
        sidenav.classList.toggle('sidenav__active');
        burger.classList.toggle('burgeractive');
    });
});