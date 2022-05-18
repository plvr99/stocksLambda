import getCurrencies from "../adapters/returnCurrenciesAdapter.js";

export default async function returnStockByIdPort(currency){

    const data = await getCurrencies(currency);
    return data;
}