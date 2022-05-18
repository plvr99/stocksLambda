import retriveStockValues from "../domains/StockDomain.js";

async function getStockDataById(stockID){
    try{
    let data = await retriveStockValues(stockID);
    return data;
    }catch(err){
        console.log(err);
    }
}

export default getStockDataById;