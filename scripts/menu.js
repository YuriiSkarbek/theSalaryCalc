// functions for changing main content after clicking to menu link
function getOfficialSalary() {
    document.getElementById("calc-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-non-official__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-official").style.display = 'block';
    document.getElementById("calc-non-official").style.display = 'none';
}

function getNonOfficialSalary() {
    document.getElementById("calc-non-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-official__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-non-official").style.display = 'block';
    document.getElementById("calc-official").style.display = 'none';
}


// fuction for opening and closing sidebar
var isSideBarOpen = false;
function openSidebar() {
    if (screen.width <= 420) {
        document.getElementById("sidebar").style.width = "100%";
    } else {
        document.getElementById("sidebar").style.width = "300px";
    }
    isSideBarOpen = true;
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    isSideBarOpen = false;

}

function toggleSidebar(){
    if(isSideBarOpen == false){
        openSidebar();
    }
    else{
        closeSidebar();
    }
}