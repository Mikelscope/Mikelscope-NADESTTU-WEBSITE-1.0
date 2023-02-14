//FUNCTION TO TOGGLE HAMBURGER MENU
let menu = document.querySelector('#menu-icon')
let navEl = document.querySelector('.nav-center')

function menuClick() {

    menu.classList.toggle('fa-x');
    navEl.classList.toggle('open');
}

//FUNCTION FOR READ MORE
let readMoreBtn = document.getElementById('read-more-btn')
let more = document.getElementById('more');
let dots = document.getElementById('dots')
let readMore = document.getElementById('read-more');
let aboutText = document.getElementById('about-text')

function toReadMore(){
    if(more.style.display === ""){
        more.style.display='inline';
        readMoreBtn.innerHTML = "read less"
    }
    else {
        more.style.display='';
        readMoreBtn.innerHTML = "read more"

    }
}