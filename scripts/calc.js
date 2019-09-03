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
var btn = document.getElementById("result__btn");
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