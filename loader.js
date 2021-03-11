let loaderWrapper = document.querySelector('.loader-wrapper')
let html = document.querySelector('html')
let cubeGrid = document.querySelector('sk-cube-grid')
html.style.overflowY = 'hidden'

window.addEventListener("load", function () {
  setTimeout(() => {
    loaderWrapper.style.opacity = "0"
    loaderWrapper.style.display = "none"
    html.style.overflowY = 'unset'


  }, 2000);
});