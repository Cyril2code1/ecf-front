const icone = document.querySelector('.navbar i');
const menu = document.querySelector('.menu');

const btnGalleries = document.getElementById('galleries');
const galleries = document.querySelector('.galleries');

const btnBenefits = document.getElementById('benefits');
const benefits = document.querySelector('.benefits');

const btnContact = document.getElementById('contact');
const contact = document.querySelector('.contact');




icone.addEventListener('click', menuToggle);
icone.addEventListener('click', function(){
    if (galleries.classList.contains('popin-galleries')) { 
        galleriesToggle() 
    };
    if (benefits.classList.contains('popin-benefits')) { 
        benefitsToggle() 
    }; 
    if (contact.classList.contains('popin-contact')) { 
        contactToggle() 
    }; 

});



btnGalleries.addEventListener('click', menuToggle);
btnGalleries.addEventListener('click', galleriesToggle);

btnBenefits.addEventListener('click', menuToggle);
btnBenefits.addEventListener('click', benefitsToggle);

btnContact.addEventListener('click', menuToggle);
btnContact.addEventListener('click', contactToggle);






function menuToggle() {
    menu.classList.toggle('popin-menu');
    icone.classList.toggle('fa-times');
}

function galleriesToggle() {
    galleries.classList.toggle('popin-galleries');
}

function benefitsToggle() {
    benefits.classList.toggle('popin-benefits');
}

function contactToggle() {
    contact.classList.toggle('popin-contact');
}