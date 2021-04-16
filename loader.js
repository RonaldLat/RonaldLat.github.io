// let loaderWrapper = document.querySelector('.loader-wrapper')
// let html = document.querySelector('html')
// let cubeGrid = document.querySelector('sk-cube-grid')
// html.style.overflowY = 'hidden'

// window.addEventListener("load", function () {
//   setTimeout(() => {
//     loaderWrapper.style.opacity = "0"
//     setTimeout(() => {
//       loaderWrapper.style.display = "none"
// // was 3000
//     }, 1000);
//     html.style.overflowY = 'unset'


//   }, 500);
// });


let loaderWrapper = document.querySelector('.loader-wrapper')
let html = document.querySelector('html')
let cubeGrid = document.querySelector('.diamond-container')
html.style.overflowY = 'hidden'

window.addEventListener("load", function () {
  setTimeout(() => {
    loaderWrapper.style.opacity = "0"
    setTimeout(() => {
      loaderWrapper.style.display = "none"
// was 3000
    }, 300);
    html.style.overflowY = 'unset'


  }, 4000);
});