// hamburger menu

//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klik diluar hamburger menu
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
}
);


//darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme='dark';
    }
    else {
        html.classList.remove('dark');
        localStorage.theme='light';
    }
});

//pindahkan posisi toggle sesuai theme
if (localStorage.theme === 'dark') {
    darkToggle.checked = true;
    html.classList.add('dark');
}
else {
    darkToggle.checked = false;
    html.classList.remove('dark');
}

