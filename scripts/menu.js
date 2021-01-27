// functions for changing main content after clicking to menu link
function getOfficialSalary() {
    document.getElementById("calc-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-non-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-hourly__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-fop__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-official").style.display = 'block';
    document.getElementById("calc-non-official").style.display = 'none';
    document.getElementById("calc-hourly").style.display = 'none';
    document.getElementById("calc-fop").style.display = 'none';

    closeSidebar();
}

function getNonOfficialSalary() {
    document.getElementById("calc-non-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-hourly__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-fop__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-non-official").style.display = 'block';
    document.getElementById("calc-official").style.display = 'none';
    document.getElementById("calc-hourly").style.display = 'none';
    document.getElementById("calc-fop").style.display = 'none';
    closeSidebar();
    
}

function getHourlySalary() {
    document.getElementById("calc-hourly__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-non-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-fop__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-non-official").style.display = 'none';
    document.getElementById("calc-official").style.display = 'none';
    document.getElementById("calc-hourly").style.display = 'block';
    document.getElementById("calc-fop").style.display = 'none';
    closeSidebar();
}

function getFopSalary() {
    document.getElementById("calc-hourly__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-non-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-official__btn").classList.remove("sidebar__btn-active");
    document.getElementById("calc-fop__btn").classList.add("sidebar__btn-active");

    document.getElementById("calc-non-official").style.display = 'none';
    document.getElementById("calc-official").style.display = 'none';
    document.getElementById("calc-hourly").style.display = 'none';
    document.getElementById("calc-fop").style.display = 'block';
    closeSidebar();
}


// fuction for opening and closing sidebar
var isSideBarOpen = false;
function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    if (window.innerWidth <= 420) {
        document.getElementById("sidebar").style.width = "100%";
    } else {
        document.getElementById("sidebar").style.width = "320px";
    }
    isSideBarOpen = true;
}

function closeSidebar() {
    if(window.innerWidth <= 1023){
        document.getElementById("sidebar").style.left = "-110%";
        isSideBarOpen = false;
    }

}

function toggleSidebar(){
    if(isSideBarOpen == false){
        openSidebar();
    }
    else{
        closeSidebar();
    }
}