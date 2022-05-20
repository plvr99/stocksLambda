import { handleDeleteProductRequest, handleGetProductRequest, handlePostProductRequest, handlePutProductRequest } from "../ports/ProductRequestHandler.js";

export default async function handleProductRequest(event) {
    let res = {};
    try {
        switch (event.routeKey) {
            case "GET /dynamoDB/{productId}":
                {
                    console.log("get")
                    const id = event.pathParameters.productId;
                    console.log(id)
                    const productData = await handleGetProductRequest(id);
                    res = {
                        'statusCode': 200,
                        'body': JSON.stringify({
                            product: productData,
                        })
                    }
                    return res;
                }
            case "POST /dynamoDB":
                {
                    console.log("POST called")
                    let requestBody = JSON.parse(event.body)
                    console.log(requestBody)
                    const postedProduct = await handlePostProductRequest(requestBody);
                    res = {
                        'statusCode': 201,
                        'body': JSON.stringify({
                            message: "Product created succesfully",
                            product: postedProduct,
                        })
                    }
                    return res;
                }
            case "PUT /dynamoDB/{productId}":
                {
                    console.log("PUT called");
                    const id = event.pathParameters.productId;
                    let requestBody = JSON.parse(event.body)
                    const product = await handlePutProductRequest(id, requestBody);
                    res = {
                        'statusCode' : 200,
                        'body': JSON.stringify({
                            product: product
                        })
                    }
                    return res;
                }
            case "DELETE /dynamoDB/{productId}":
                {
                    console.log("DELETE called")
                    const productId = event.pathParameters.productId;
                    const deleted = await handleDeleteProductRequest(productId);
                    console.log(deleted)
                    res = {
                        'statusCode': 204,
                        'body': JSON.stringify({})
                    }
                    return res;
                }
            case "GET /sellableProduct":{
                res = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message:"Not implemented yet"
                    })
                }
            }
            default:
                return {
                    'statusCode': 400,
                    'body': JSON.stringify({
                        message: "Supported paths are /dynamoDB and /sellableProduct"
                    })
                }
        }
    } catch (error) {
        return {
            'statusCode': 500,
        }
    }
}