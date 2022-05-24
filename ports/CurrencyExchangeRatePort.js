import getCurrencyExchangeRates from "../adapters/returnCurrenciesAdapter.js";

export default async function returnExchangeRateCurrency(currentCurrency, exchangeCurrency){

    const data = await getCurrencyExchangeRates(currentCurrency, exchangeCurrency);
    return data;
}