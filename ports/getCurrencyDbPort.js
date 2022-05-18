import getCurrencyById from "../adapters/returnCurrencyDbAdapter.js";

export default async function getCurrencyFromDB(currencyId) {
    try {
        let data = await getCurrencyById(currencyId);
        return data;
    } catch (err) {
        console.log(err);
    }
}