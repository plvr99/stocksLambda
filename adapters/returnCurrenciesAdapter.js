import axios from "axios";

async function getCurrencyExchangeRates(currentCurrency, exchangeCurrency){
    //put currency at the end of link
    console.log("currs")
    console.log(currentCurrency +" + "+ exchangeCurrency)
    const body = await axios.get('https://open.er-api.com/v6/latest/'+currentCurrency)
    const data = body?.data;
    const exchangeRates = data.rates;
    console.log("exchange rates")
    console.log(exchangeRates)
    
    const exchangeRateValue = exchangeRates[exchangeCurrency]
    console.log(exchangeRateValue)
    return exchangeRateValue;
}

export default getCurrencyExchangeRates;