// get the exhange rates from PrivatBank APi
let exchangeRatesApiUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

fetch(exchangeRatesApiUrl)
.then(res => res.json())
.then((exchangeRatesData) => {
    var EUR = exchangeRatesData[1].sale;
    var EUR = parseFloat(EUR).toFixed(2);
    document.getElementById('exchangerate_EUR').innerHTML = EUR;

    var USD = exchangeRatesData[0].sale;
    var USD = parseFloat(USD).toFixed(2);
    document.getElementById('exchangerate_USD').innerHTML = USD;

    var RUR = exchangeRatesData[2].sale;
    var RUR = parseFloat(RUR).toFixed(2);
    document.getElementById('exchangerate_RUR').innerHTML = RUR;
}).catch(err => { throw err });



