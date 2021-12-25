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
