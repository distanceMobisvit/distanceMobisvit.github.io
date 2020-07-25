// function show() {
//     //получаем через API браузера div с ID square
//     let hideSqr = document.getElementById('square');
//     /* и при помощи встроенного метода toogle устанавливает класс show, при повторном клике на кнопку убираем данный класс. 
//     Сам класс прописан в фаиле css и подключен в index.html как и сам фаил js. См. комментарии в фаиле index.html*/
//     hideSqr.classList.toggle('hide');

    
// }



// let dotsA = document.getElementById('dotsI');
    
    
//     dotsA.classList.toggle('dotsA');

const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active')
});