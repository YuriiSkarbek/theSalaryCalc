function getOfficialSalary(){
    document.getElementById("calc-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-non-official__btn").classList.remove("sidebar__btn-active");

    document.getElementById("calc-official").style.display = 'block';
    document.getElementById("calc-non-official").style.display = 'none';
}

function getNonOfficialSalary(){
    document.getElementById("calc-non-official__btn").classList.add("sidebar__btn-active");
    document.getElementById("calc-official__btn").classList.remove("sidebar__btn-active");
    
    document.getElementById("calc-non-official").style.display = 'block';
    document.getElementById("calc-official").style.display = 'none';
}