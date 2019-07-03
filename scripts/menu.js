function getOfficialSalary(){
    document.getElementById("calcOfficialSalary-btn").classList.add("sidebar_btn-active");
    document.getElementById("calcNonOfficialSalary-btn").classList.remove("sidebar_btn-active");

    document.getElementById("calcOfficialSalary").style.display = 'block';
    document.getElementById("calcNonOfficialSalary").style.display = 'none';
}

function getNonOfficialSalary(){
    document.getElementById("calcNonOfficialSalary-btn").classList.add("sidebar_btn-active");
    document.getElementById("calcOfficialSalary-btn").classList.remove("sidebar_btn-active");
    
    document.getElementById("calcNonOfficialSalary").style.display = 'block';
    document.getElementById("calcOfficialSalary").style.display = 'none';
    
    
}