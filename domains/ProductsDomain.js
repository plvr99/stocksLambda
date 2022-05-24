import { uuid } from "uuidv4";
import returnExchangeRateCurrency from "../ports/CurrencyExchangeRatePort.js";


import { deleteProductData, getProductData, postProductData, updateOrPostProductData } from "../ports/ProductsRepository.js";

export async function retrieveProduct(productId, exchangeCurrency) {
    let data = await getProductData(productId);
    const exchangeRate = exchangeCurrency ? await returnExchangeRateCurrency('EUR', exchangeCurrency) : 1;
    console.log("Product")
    console.log(data)
    //business logic ...
    if(!data.id) return null;
    if(data.price) {
        data.price = data.price * exchangeRate;
    }
    return data;
}

export async function postProduct(productData) {
    const id = uuid();
    const dataToPost = { id, ...productData };

    const postedProduct = await postProductData(dataToPost);
    console.log("Posted product")
    console.log(postedProduct)
    if (!postedProduct) {
        return {}
    }
    return postedProduct;
}

export async function updateProductData(productId, productData) {
    const product = { id: productId, ...productData };
    const updatedProduct = await updateOrPostProductData(product);
    return updatedProduct;
}

export async function deleteProduct(productId) {
    const deleted = await deleteProductData(productId);
    return deleted;
}