// get the exhange rates from PrivatBank APi
let exchangeRatesApiUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

fetch(exchangeRatesApiUrl)
    .then(res => res.json())
    .then((exchangeRatesData) => {
        var EUR_sale = parseFloat(exchangeRatesData[1].sale).toFixed(2);
        var EUR_buy = parseFloat(exchangeRatesData[1].buy).toFixed(2);
        document.getElementById('exchangerate_EUR-sale').innerHTML = EUR_sale;
        document.getElementById('exchangerate_EUR-buy').innerHTML = EUR_buy;

        var USD_sale = parseFloat(exchangeRatesData[0].sale).toFixed(2);
        var USD_buy = parseFloat(exchangeRatesData[0].buy).toFixed(2);
        document.getElementById('exchangerate_USD-sale').innerHTML = USD_sale;
        document.getElementById('exchangerate_USD-buy').innerHTML = USD_buy;

        var RUR_sale = parseFloat(exchangeRatesData[2].sale).toFixed(2);
        var RUR_buy = parseFloat(exchangeRatesData[2].buy).toFixed(2);
        document.getElementById('exchangerate_RUR-sale').innerHTML = RUR_sale;
        document.getElementById('exchangerate_RUR-buy').innerHTML = RUR_buy;

        // show exchange rates in header if request was success
        document.getElementById('exchangerates').style.display = 'block';
    }).catch(err => {
        console.error('cannot get exchange rates from PrivatBank APi')
        document.getElementById('exchangerates').style.display = 'none';
    });

