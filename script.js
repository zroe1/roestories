let menu = document.getElementById('mobileMenu');
let mobilemenu = document.getElementById('mobileDropdown');
let main = document.getElementById('main');
let footer = document.getElementById('footer');

let menutop = document.getElementById('top');
let menumid = document.getElementById('mid');
let menulow = document.getElementById('low');

is_mobile_menu_open = false;
console.log(menu)

menu.addEventListener('click', displayMenu);

function displayMenu(){
    // menutop.classList.add("testA");
    // menumid.classList.add("testA");
    // menulow.classList.add("testB");
    if (!is_mobile_menu_open) {
        menutop.classList.remove("menuAnimate5");
        menumid.classList.remove("menuAnimate4");
        menulow.classList.remove("menuAnimate3");

        menutop.classList.add("menuAnimate1");
        menumid.classList.add("menuAnimate1");
        menulow.classList.add("menuAnimate2");
        mobilemenu.classList.remove('displayNone');
        main.classList.remove("displayBlock");
        footer.classList.remove("displayFlex");
        mobilemenu.classList.add('displayBlock');
        main.classList.add("displayNone");
        footer.classList.add("displayNone");
        is_mobile_menu_open = true;
    } else {
        // menutop.classList.add("menuAnimate5");
        // menumid.classList.add("menuAnimate4");

        menutop.classList.remove("menuAnimate1");
        menumid.classList.remove("menuAnimate1");
        menulow.classList.remove("menuAnimate2");

        menutop.classList.add("menuAnimate5");
        menumid.classList.add("menuAnimate4");
        menulow.classList.add("menuAnimate3");

        mobilemenu.classList.remove('displayBlock');
        main.classList.remove("displayNone");
        footer.classList.remove("displayNone");
        mobilemenu.classList.add('displayNone');
        main.classList.add("displayBlock");
        footer.classList.add("displayFlex");
        is_mobile_menu_open = false;
    }
}