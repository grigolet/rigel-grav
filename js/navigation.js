(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        var menuButton = document.querySelector('.menu__button');
        var menuList = document.querySelector('.menu__list');
        var menuHeader = document.querySelector('.menu__header');
        var menuHeaderHeight = menuHeader.clientHeight;
        var menuListVisible = false;

        menuList.style.top = `${menuHeaderHeight}px`;
        menuButton.addEventListener('click', toggleMenuList);


        function toggleMenuList(event) {
            if (menuListVisible) {
                menuList.style.display = 'none';
            } else {
                menuList.style.display = 'block';
            }
            menuListVisible = !menuListVisible;
        }
    })
})();