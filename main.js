const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('#navbar');
const closeBtn = document.querySelector('#close-btn');
const faturesBtn = document.querySelector('#fatures-btn');
const companyBtn = document.querySelector('#company-btn');
const faturesBtnArrow = document.querySelector('#fatures-btn-arrow');
const companyBtnArrow = document.querySelector('#company-btn-arrow');
const faturesUl = document.querySelector('#features-ul');
const companyUl = document.querySelector('#company-ul');

hamburgerMenu.addEventListener('click', () => {
    navbar.style.display = 'block';
} );

closeBtn.addEventListener('click', () => {

    const screenSize = window.innerWidth;

    if (screenSize >= 768) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
   
} );

faturesBtn.addEventListener('click', () => {
    faturesUl.style.display = (faturesUl.style.display === 'block') ? 'none' : 'block';
    faturesBtnArrow.style.transform = (faturesUl.style.display === 'block') ? 'rotate(180deg)' : 'rotate(0deg)';
} );

companyBtn.addEventListener('click', () => {
    companyUl.style.display = (companyUl.style.display === 'block') ? 'none' : 'block';
    companyBtnArrow.style.transform = (companyUl.style.display === 'block') ? 'rotate(180deg)' : 'rotate(0deg)';
} );
