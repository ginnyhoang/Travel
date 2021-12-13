// Đóng mở Header Menu Option
var menuBtn = document.querySelector('.header__menu-list');
var openOption = document.querySelector('.header__menu-option');
var closeOption = document.querySelector('.header__menu-option-close');


// // // Mở Header Menu Option
menuBtn.onclick = function () {
    openOption.style.transform = 'translateX(0%)';
}

// Đóng option
closeOption.onclick = function () {
    openOption.style.transform = 'translateX(100%)';
}