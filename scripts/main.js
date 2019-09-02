// get the exhange rates from PrivatBank APi
let exchangeRatesApiUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

fetch(exchangeRatesApiUrl)
    .then(res => res.json())
    .then((exchangeRatesData) => {
        var EUR_sale = parseFloat(exchangeRatesData[1].sale).toFixed(2);
        var EUR_buy = parseFloat(exchangeRatesData[1].buy).toFixed(2);
        document.getElementById('exchangerate-EUR-sale').innerHTML = EUR_sale;
        document.getElementById('exchangerate-EUR-buy').innerHTML = EUR_buy;

        var USD_sale = parseFloat(exchangeRatesData[0].sale).toFixed(2);
        var USD_buy = parseFloat(exchangeRatesData[0].buy).toFixed(2);
        document.getElementById('exchangerate-USD-sale').innerHTML = USD_sale;
        document.getElementById('exchangerate-USD-buy').innerHTML = USD_buy;

        var RUR_sale = parseFloat(exchangeRatesData[2].sale).toFixed(2);
        var RUR_buy = parseFloat(exchangeRatesData[2].buy).toFixed(2);
        document.getElementById('exchangerate-RUR-sale').innerHTML = RUR_sale;
        document.getElementById('exchangerate-RUR-buy').innerHTML = RUR_buy;

        // show exchange rates in header if request was success
        document.getElementById('exchange-rates').style.display = 'block';
    }).catch(err => {
        console.error('cannot get exchange rates from PrivatBank APi. Error:', err)
        document.getElementById('exchange-rates').style.display = 'none';
    });

