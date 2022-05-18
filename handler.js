"use strict";
import getStockById from "./adapters/getsStockByIdAdapter.js";
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
  const id = event.pathParameters.id;
  const res = await getStockById(id);
  /*console.log(event);
  console.log("response:")
  console.log(res);*/
  return res;
}
