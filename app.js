// let iconNav = () =>{
//     let portofolio = document.querySelector('.portofolio');
//     let main = document.querySelector('main');

//     let callBackF = (entries)=>{
//         console.log(entries[0])
//     }

//     const observer = new IntersectionObserver(callBackF, {
//         threshold: .6
//         // root: main
//     });


//     observer.observe(portofolio);

// }

// iconNav();
let pageIndicator =(entries)=>{
    let navIcons =document.querySelectorAll('.nav-icons i')
    for(const entry of entries){
        // console.log(`${entry.target.className} is in view: ${entry.isIntersecting}`);
        //
        if(entry.isIntersecting){
            for(const icon of navIcons){
                if(entry.target.className == icon.target.id){
                    alert('i did it')
                }
            }


            // console.log(entry.target.className)
            // if(entry.target.className == 'home'){
            //     // alert('yes')
            //     navIcons[0].style.opacity = '1'
            //     console.log(navIcons[0])
            // }else{
            //     navIcons[0].style.opacity = '.4'
            // }
            // entry.classList.add('.active');

        }
    }
}
const io = new IntersectionObserver(pageIndicator, {
    threshold:.7
});

const sections = document.querySelectorAll('section');
// console.log(sections)
sections.forEach(sect => io.observe(sect));