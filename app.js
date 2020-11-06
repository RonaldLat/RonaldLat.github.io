


function toggleNav() {
  let options = {
    threshold: 0.2,
  };
  let homeSect = document.querySelector(".home");
  let aboutSect = document.querySelector(".about");
  let nav = document.querySelector("nav ");
  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entry)
      if (!entry.isIntersecting) {
        // nav.style.opacity= '1';
        nav.style.transform = "translateY(0)";
      } else {
        // nav.style.opacity = '0';
        nav.style.transform = "translateY(-100%)";
      }
    });
  }, options);
  observer.observe(homeSect);
}

//page indicator
function pageIndicator() {
  let options = {
    threshold: 0.6,
  };
  let icons = document.querySelectorAll(".nav-icons a ");
  let sections = document.querySelectorAll("section");

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let section = entry.target.getAttribute("id");
        let navActive = document.querySelector(`a[href="#${section}"]`);
        icons.forEach(icon => icon.classList.remove('page-active'))
        navActive.classList.add("page-active");

      }

    });
  }, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function aos() {
  let options = {
    threshold: 0.2,
  };
  let boxes = document.querySelectorAll(".boxes");
  let left = document.querySelectorAll('.left');
  let right = document.querySelectorAll('.right');

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)'
        entry.target.style.opacity = '100%'

        observer.unobserve(entry.target)
      }
    })
  }, options)
  boxes.forEach((box) => {
    observer.observe(box);
  });
}

function skillIn() {
  let element = document.querySelectorAll('.up-animation');
  let options = {
    threshold: 0.5,
  };
  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)'
        observer.unobserve(entry.target)
      }

    })
  }, options)

  // observer.observe(skill);
  // observer.observe(skillHeader);
  element.forEach(el=>{
    observer.observe(el)
  })

}




skillIn()
aos()
toggleNav();
pageIndicator();