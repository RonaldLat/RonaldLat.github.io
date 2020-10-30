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
        icons.forEach(icon=> icon.classList.remove('page-active'))
        navActive.classList.add("page-active");
        console.log(navActive);

      } 
      
    });
  }, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

toggleNav();
pageIndicator();
