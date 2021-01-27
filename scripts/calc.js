//global data

// init inputs on calculators
// inputs from official calculator
var fullSalary_official = document.getElementById("full-salary_official");
var workDays_official = document.getElementById("work-days_official");
var workHour_official = document.getElementById("work-hour_official");

// inputs from non official calculator
var fullSalary_nonOfficial = document.getElementById("full-salary_non-official");
var workDays_nonOfficial = document.getElementById("work-days_non-official");
var usedWorkDays_nonOfficial = document.getElementById("used-work-days_non-official")
var workHour_nonOfficial = document.getElementById("work-hour_non-official");

// inputs from hourly calculator
var hourRate_hourly = document.getElementById("hour-rate_hourly");
var workHour_hourly = document.getElementById("work-hour_hourly");

// inputs from fop calculator
var fullSalary_fop = document.getElementById("full-salary_fop");
var esv_fop = document.getElementById("esv_fop");
var tax_fop = document.getElementById("tax_fop");

// init areas on modal for insert result
var modalFullSalary = document.getElementById("modal-fullSalary");
var modalUsedDaysWork = document.getElementById("modal-usedDaysWork")
var modalSalaryOnHands = document.getElementById("modal-salaryOnHands");
var modalResultForDay = document.getElementById("modal-resultForDay");
var modalResultForHour = document.getElementById("modal-resultForHour");
var modalTax = document.getElementById("modal-tax");

function calculateOfficialSalary() {
	var taxForSalary = fullSalary_official.value / 100 * 19.5;
	var salaryOnHands = fullSalary_official.value - taxForSalary;
	modalTax.innerHTML = taxForSalary;
	if (workDays_official.value == '') {
		console.log('work-days is null');
	} else {
		var resultForDay = salaryOnHands / workDays_official.value;
		modalResultForDay.innerHTML = resultForDay.toFixed(2);
		modalUsedDaysWork.innerHTML = workDays_official.value;

		if (workHour_official.value == '') {
			console.log('work-hour is null');
		} else {
			var resultForHour = resultForDay / workHour_official.value;
			modalResultForHour.innerHTML = resultForHour.toFixed(2);
		}
	}

	// fill the result in modal
	modalFullSalary.innerHTML = fullSalary_official.value;
	modalSalaryOnHands.innerHTML = salaryOnHands.toFixed(2);

	modal.style.display = "block";
}

function calculateNonOfficialSalary() {
	if (workDays_nonOfficial.value == '') {
		console.log('work-days is null');
	} else {
		var resultForDay = fullSalary_nonOfficial.value / workDays_nonOfficial.value;
		modalResultForDay.innerHTML = resultForDay.toFixed(2);
		var salaryOnHands = resultForDay * usedWorkDays_nonOfficial.value;
		modalUsedDaysWork.innerHTML = usedWorkDays_nonOfficial.value;

		if (workHour_nonOfficial.value == '') {
			console.log('work-hour is null');
		} else {
			var resultForHour = resultForDay / workHour_nonOfficial.value;
			modalResultForHour.innerHTML = resultForHour.toFixed(2);
		}
	}
	// fill the result in modal
	modalFullSalary.innerHTML = fullSalary_nonOfficial.value;
	modalSalaryOnHands.innerHTML = salaryOnHands;
	modal.style.display = "block";
	
}

function calculateHourlySalary() {
	var salaryOnHands = workHour_hourly.value * hourRate_hourly.value;
	modalFullSalary.innerHTML = salaryOnHands.toFixed(2);
	modalSalaryOnHands.innerHTML = salaryOnHands.toFixed(2);
	modal.style.display = "block";

}

function calculateFopSalary() {
	var taxForSalary = fullSalary_fop.value / 100 * tax_fop.value;
	var salaryOnHands = fullSalary_fop.value - taxForSalary;
	salaryOnHands = salaryOnHands - esv_fop.value;
	modalFullSalary.innerHTML = fullSalary_fop.value;
	modalSalaryOnHands.innerHTML = salaryOnHands.toFixed(2);
	modal.style.display = "block";
}


// you can't enter the workHour if workDays is null
workDays_official.oninput = function () {
	if (workDays_official.value != '') {
		workHour_official.disabled = false;
	} else {
		workHour_official.disabled = true;
	}
}

workDays_nonOfficial.oninput = function () {
	if (workDays_nonOfficial.value != '') {
		workHour_nonOfficial.disabled = false;
	} else {
		workHour_nonOfficial.disabled = true;
	}
}



// Modal with the result of the calculation
var modal = document.getElementById("result__modal");
var btn = document.getElementById("result-btn");
var close = document.getElementsByClassName("close")[0];

close.onclick = function () {
	modal.style.display = "none";
	cleanModal();
}

// Click anywhere outside of modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function cleanModal() {
	modalFullSalary.innerHTML = '';
	modalTax.innerHTML = '';
	modalUsedDaysWork.innerHTML = '';
	modalResultForDay.innerHTML = '';
	modalResultForHour.innerHTML = '';
	modalSalaryOnHands.innerHTML = '';
}