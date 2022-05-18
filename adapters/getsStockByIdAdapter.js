import getStockDataById from "../ports/getStockByIdPort.js";

async function getStockById (stockID){
    let res;

    try {   
        const stockData = await getStockDataById(stockID)
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify({
                data: stockData,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    return res;
} 

export default getStockById;