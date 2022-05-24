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
                    const error = validateQueryParams(event?.queryStringParameters);
                    console.log("retrieved error")
                    console.log(error)
                    if(error) {
                        res = {
                            'statusCode': 400,
                            'body': JSON.stringify({
                                message : error
                            })
                        }
                        return res;
                    }
                    const exchangeCurrency = event?.queryStringParameters?.currency;
                    const productData = await handleGetProductRequest(id, exchangeCurrency);
                    if (productData == null) {
                        res = {
                            'statusCode': 404,
                            'body': JSON.stringify({
                                product: productData,
                            })
                        }
                    }
                    else {
                        res = {
                            'statusCode': 200,
                            'body': JSON.stringify({
                                product: productData,
                            })
                        }
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
                        'statusCode': 200,
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
            case "GET /sellableProduct": {
                res = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: "Not implemented yet"
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

function validateQueryParams(queryParams){
    if(!queryParams) return undefined;
    try {
        if(queryParams.currency) validateCurrency(queryParams.currency);
    } catch (error) {
        console.log(error)
        console.log(error.message)
        return error.message;
    }
    
}

function validateCurrency(currency){
    const CURRENCIES = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD",
    "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK",
    "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL",
    "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW",
    "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK",
    "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD",
    "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND",
    "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF",
    "YER", "ZAR", "ZMW", "ZWL"]
    const found = CURRENCIES.findIndex(curr => curr === currency);
    console.log("found")
    console.log(found)
    if(found === -1) throw new Error('Invalid currency param');
}