// init inputs on calculators
var fullSalary = document.getElementById("fullSalary");
var workDays = document.getElementById("workDays");
var workHour = document.getElementById("workHour");

// init areas on modal for insert result
var modalFullSalary = document.getElementById("modal-fullSalary");
var modalSalaryOnHands = document.getElementById("modal-salaryOnHands");
var modalResultForDay = document.getElementById("modal-resultForDay");
var modalResultForHour = document.getElementById("modal-resultForHour");

function cleanModal(){
	modalFullSalary.innerHTML = '';
	modalSalaryOnHands.innerHTML = '';
	modalResultForDay.innerHTML = '';
	modalResultForHour.innerHTML = '';
	
}
function calculateOfficialSalary() {
	var taxForSalary = fullSalary.value / 100 * 19.5;
	var salaryOnHands = fullSalary.value - taxForSalary;

	if (workDays.value == '') {
		console.log('workDays is null');
	} else {
		var resultForDay = salaryOnHands / workDays.value;
		modalResultForDay.innerHTML = resultForDay.toFixed(2);

		if (workHour.value == '') {
			console.log('workHour is null');
		} else {
			var resultForHour = resultForDay / workHour.value;
			modalResultForHour.innerHTML = resultForHour.toFixed(2);
		}

	}


	modalFullSalary.innerHTML = fullSalary.value;
	modalSalaryOnHands.innerHTML = salaryOnHands.toFixed(2);




	// var resultForDay = fullSalary.value / workDays.value;
	// var resultForHour = resultForDay / workHour.value;
	// console.log('_______________________________ ');
	// console.log('Оклад: ', fullSalary.value);
	// console.log('Оплата в день: ', resultForDay.toFixed(2));
	// console.log('Оплата в годину: ', resultForHour.toFixed(2));

	// Open the modal
	modal.style.display = "block";
	
}

// Modal with the result of the calculation
var modal = document.getElementById("result-modal");
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