let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}
new Glider(document.querySelector('.designers-slider'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});
const header=document.querySelector("header")
window.addEventListener("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY > 0)
})