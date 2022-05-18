import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js' // 'aws-sdk' not working

const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

export default async function getCurrencyById(currencyId){
    const id = parseInt(currencyId)
    const Key = {id: id};
    const data = await db.get({TableName, Key}).promise();
    /*console.log("data retrieved from db:")
    console.log(data)
    console.log(data.Item)*/
    return data.Item;
}