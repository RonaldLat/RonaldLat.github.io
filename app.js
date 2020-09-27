
let pageIndicator =(entries)=>{
    let navIcons =document.querySelectorAll('.nav-icons i');
    for(const entry of entries){
        // console.log(`${entry.target.className} is in view: ${entry.isIntersecting}`);
        //
        if(entry.isIntersecting){

        
            if(entry.target.className == 'home'){
                navIcons[0].style.opacity = '1'
                navIcons[0].classList.add("activel")
            }else{
                navIcons[0].style.opacity = '.4'
                navIcons[0].classList.remove("activel")

            };

            if(entry.target.className == 'about'){
                navIcons[1].style.opacity = '1'
            }else{
                navIcons[1].style.opacity = '.4'
            };

            if(entry.target.className == 'portofolio'){
                navIcons[2].style.opacity = '1'
            }else{
                navIcons[2].style.opacity = '.4'
            };

            if(entry.target.className == 'contact'){
                navIcons[3].style.opacity = '1'
            }else{
                navIcons[3].style.opacity = '.4'
            };

        }
    }
}
const io = new IntersectionObserver(pageIndicator, {
    threshold:.7
});

const sections = document.querySelectorAll('section');
// console.log(sections)
sections.forEach(sect => io.observe(sect));