// init inputs on calculators
var fullSalary = document.getElementById("full-salary");
var workDays = document.getElementById("work-days");
var workHour = document.getElementById("work-hour");

// init areas on modal for insert result
var modalFullSalary = document.getElementById("modal-fullSalary");
var modalSalaryOnHands = document.getElementById("modal-salaryOnHands");
var modalResultForDay = document.getElementById("modal-resultForDay");
var modalResultForHour = document.getElementById("modal-resultForHour");

function calculateOfficialSalary() {
	var taxForSalary = fullSalary.value / 100 * 19.5;
	var salaryOnHands = fullSalary.value - taxForSalary;

	if (workDays.value == '') {
		console.log('work-days is null');
	} else {
		var resultForDay = salaryOnHands / workDays.value;
		modalResultForDay.innerHTML = resultForDay.toFixed(2);

		if (workHour.value == '') {
			console.log('work-hour is null');
		} else {
			var resultForHour = resultForDay / workHour.value;
			modalResultForHour.innerHTML = resultForHour.toFixed(2);
		}

	}

	modalFullSalary.innerHTML = fullSalary.value;
	modalSalaryOnHands.innerHTML = salaryOnHands.toFixed(2);

	modal.style.display = "block";
	
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

function cleanModal(){
	modalFullSalary.innerHTML = '';
	modalSalaryOnHands.innerHTML = '';
	modalResultForDay.innerHTML = '';
	modalResultForHour.innerHTML = '';
}