

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
    let main = document.querySelector('main')
    //all buttons
    let allButtons = [home, about, portofolio, contact];
    //page tracker
    let pageTracker;
    //all pages array
    let allPages= [homePage, aboutPage, portofolioPage, contactPage];

    //event listeners for all buttons

    allButtons[0].addEventListener('click', ()=>{
        
    });

    // homePage.classList.add('page-active')
    // home.addEventListener('click', function(){
    //     if(pageTracker !==homePage){
    //         pageTracker=homePage;
    //         console.log(pageTracker)

    //     }


    // })
    // about.addEventListener('click', function(){
    //     if(pageTracker !== aboutPage){
    //         pageTracker=aboutPage;
    //         console.log(pageTracker)
    //     }

    // })
    // portofolio.addEventListener('click', function(){
    //     // if(portofolioPage.classList.c)


    // })
    // contact.addEventListener('click', function(){

    // })
}


let app = ()=>{
    // navSlide();
    bottomNav();
}
app();