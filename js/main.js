// adaptiv header
window.addEventListener('resize', adaptive_header);

function adaptive_header() {
    var w = window.innerWidth;
    var headerMenu = document.querySelector('.header-menu');
    var headerLang = document.querySelector('.header__top-lang');
    var headerTop = document.querySelector('.header__top');
    var menu = document.querySelectorAll('.menu');
    var menuLeft = document.getElementById('menu-left');
    var menuRight = document.getElementById('menu-right');
    var headerColumn1 = document.getElementById('header__bottom-column-1');
    var headerColumn3 = document.getElementById('header__bottom-column-3');

    if (w <= 767) {
        if (!headerLang.classList.contains('done')) {
            headerLang.classList.add('done');
            headerMenu.appendChild(headerLang);
            menu.forEach((item) => {
                headerMenu.appendChild(item)
            });
        }
    } else {
        if (headerLang.classList.contains('done')) {
            headerLang.classList.remove('done');
            headerTop.prepend(headerLang);
            headerColumn1.prepend(menuLeft);
            headerColumn3.prepend(menuRight);
        }
    }
};

adaptive_header();

// burger-menu
const menuButton = document.querySelector('.header-menu__icon');
const menu = document.querySelector('.header-menu');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active')
})

// adaptiv-foto 
function ibg(){
    let ibg = document.querySelectorAll('.ibg');
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }   
}

ibg();

//maps
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.7438, -73.9262),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const location = {lat: 40.7438, lng: -73.9262};
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker ({
        position: location,
        map: map,
    });
};
myMap();