// Đóng mở Header Menu Option
var menuBtn = document.querySelector('.header__menu-list-icon');
var openOption = document.querySelector('.header__menu-option');
var closeOption = document.querySelector('.header__menu-option-close');


// // // Mở Header Menu Option
menuBtn.onclick = function () {
    openOption.classList.add('open');
}

// Đóng option
closeOption.onclick = function () {
    openOption.classList.remove('open');
}




// Đóng mở menu main mobile, tablet
var menuBtnTLMB = document.querySelector('.header__menu-list-icon-tablet-mobile');
var closeOptionMBTL = document.querySelector('.header__menu-tb-mb-close');
var optionMBTL = document.querySelector('.header__menu-tb-mb-option');

menuBtnTLMB.onclick = function () {
    optionMBTL.classList.add('open');
}

closeOptionMBTL.onclick = function () {
    optionMBTL.classList.remove('open');
}
