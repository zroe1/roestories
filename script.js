let menu = document.getElementById('mobileMenu');
let menutop = document.getElementById('top');
let menumid = document.getElementById('mid');
let menulow = document.getElementById('low');

console.log(menu)

menu.addEventListener('click', displayMenu);

function displayMenu(){
    menutop.classList.add("testA");
    menumid.classList.add("testA");
    menulow.classList.add("testB");
}