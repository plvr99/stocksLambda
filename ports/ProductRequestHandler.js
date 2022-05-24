import { deleteProduct, postProduct, retrieveProduct, updateProductData } from "../domains/ProductsDomain.js";

export async function handleGetProductRequest(productId, exchangeCurrency){
    try {
        const response = await retrieveProduct(productId, exchangeCurrency);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function handlePostProductRequest(productData){
    try {
        const response = await postProduct(productData);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function handlePutProductRequest(productId, productData){
    try {
        const response = await updateProductData(productId, productData);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function handleDeleteProductRequest(productId){
    try {
        const response = await deleteProduct(productId);
        return response;
    } catch (error) {
        console.log("ProductsReqHandler")
        console.log(error);
    }
}