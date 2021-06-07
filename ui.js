
let menu = document.getElementById("things-menu");
let btnMenu = document.getElementById("btn-things-menu");
btnMenu.onclick = (evt) => {

    if (menu.isOpen) {
        closeMenu();
    }
    else {

        menu.style.display = "block";
        menu.classList.add("slide-in-left");
        menu.classList.remove("slide-in-left-rev");

        menu.isOpen = true;
    }

    evt.stopPropagation();

}

btnMenu.addEventListener("touchend", evt => {
    evt.stopPropagation();
})

function closeMenu() {

    if (!menu.isOpen) return;

    menu.classList.remove("slide-in-left");
    menu.classList.add("slide-in-left-rev");

    menu.isOpen = false;

}

menu.close = closeMenu;

document.addEventListener("touchend", evt => {
    if (!menu.contains(evt.target)) {

        closeMenu();

    }
})

document.addEventListener("click", evt => {

    if (!menu.contains(evt.target)) {

        closeMenu();

    }
})

let info = document.getElementById("info");

document.getElementById("btn-info").onclick = evt => {
    modal.open(info, {
        maximized : false,
        width : 400,
        height : undefined,
        maximizable : false,
        modalBackground : "#2a2a2a"
    })
}