
// This  is the navigation's javascript
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // const body = document.getElementsByTagName('body');
    const bb = document.querySelector('body');



    const logoBurger = document.querySelector('.logo');
    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            // we use index and divide it by 7 to animate each menu item individually at different instances or delays

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index  / 7 + 0.3}s `;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');


        //deactivating body scroll
        // body.scrol



        burger.classList.toggle('burger-active');
        burger.classList.toggle('burger-line');
        logoBurger.classList.toggle('logo-burger');
        bb.classList.toggle('scroll-toggle');
        // document.body.style.overflow= 'hidden';

        // burger.addEventListener('click', () =>{
        //     document.body.style.overflow= 'scroll';
        // })
    });


};

//bottom navigation
let bottomNav = ()=>{


    let home = document.querySelector('#home');
    let about = document.querySelector('#about');
    let portofolio = document.querySelector('#portofolio');
    let contact = document.querySelector('#contact');

    let homePage = document.querySelector('.home');
    let aboutPage = document.querySelector('.about');
    let portofolioPage = document.querySelector('.portofolio');
    let contactPage = document.querySelector('.contact');
     
    //page tracker
    let pageTracker;
    //all pages array
    let allPages= [homePage, aboutPage, portofolioPage, contactPage];

    homePage.classList.add('page-active')
    home.addEventListener('click', function(){
        if(pageTracker !==homePage){
            pageTracker=homePage;
            console.log(pageTracker)

        }


    })
    about.addEventListener('click', function(){
        if(pageTracker !== aboutPage){
            pageTracker=aboutPage;
            console.log(pageTracker)
        }

    })
    portofolio.addEventListener('click', function(){
        // if(portofolioPage.classList.c)


    })
    contact.addEventListener('click', function(){

    })
}


let app = ()=>{
    // navSlide();
    bottomNav();
}
app();