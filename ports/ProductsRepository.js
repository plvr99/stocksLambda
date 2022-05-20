import postProduct, { deleteProduct, getProduct, updateProduct } from "../adapters/ProudctsDB.js"
export async function getProductData(productId){
    try {
        const data = getProduct(productId);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function postProductData(product){
    try {
        const data = await postProduct(product);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function updateOrPostProductData(product){
    try {
        const data = await updateProduct(product);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProductData(productId){
    try {
        const deleted = await deleteProduct(productId);
    } catch (error) {
        console.log("Products repository")
        console.log(error)
    }
}