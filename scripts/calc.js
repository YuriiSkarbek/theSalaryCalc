function calculate() {
    var fullSalary = document.getElementById("fullSalary");
    var workDays = document.getElementById("workDays");
    var workHour = document.getElementById("workHour");
    var tax = document.getElementById("tax");
    if(tax.checked){
        var taxForSalary = fullSalary.value/100*19.5;
        var salaryWithOutTax = fullSalary.value - taxForSalary;
        var resultForDay = salaryWithOutTax / workDays.value;
        var resultForHour = resultForDay / workHour.value;

        console.log('_______________________________ ');
        console.log('Оклад (до вирахування податків): ', fullSalary.value);
        console.log('Оплата на руки: ', salaryWithOutTax.toFixed(2));
        console.log('Оплата в день: ', resultForDay.toFixed(2));
        console.log('Оплата в годину: ', resultForHour.toFixed(2));

    } else {
        var resultForDay = fullSalary.value / workDays.value;
        var resultForHour = resultForDay / workHour.value;
        console.log('_______________________________ ');
        console.log('Оклад: ', fullSalary.value);
        console.log('Оплата в день: ', resultForDay.toFixed(2));
        console.log('Оплата в годину: ', resultForHour.toFixed(2));
    }

}