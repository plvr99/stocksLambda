"use strict";
import getStockById from "./adapters/getsStockByIdAdapter.js";
import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js' // 'aws-sdk' not working

const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

export async function hello(event) {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
}

export async function stocks(event) {
  console.log(event);
  if (event.requestContext.http.method == 'POST') {
    //testing
    const currency = { id:0, currency: 'AED' };

     await db
       .put({
         TableName,
         Item: currency,
       }).promise()
    return { statusCode: 200, body: JSON.stringify(currency) }
  }
  else {
    const id = event.pathParameters.id;
    const res = await getStockById(id);
    /*console.log(event);
    console.log("response:")
    console.log(res);*/
    return res;
  }

}
