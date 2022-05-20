import { uuid } from "uuidv4";
import { updateProduct } from "../adapters/ProudctsDB.js";
import { deleteProductData, getProductData, postProductData, updateOrPostProductData } from "../ports/ProductsRepository.js";

export async function retrieveProduct(productId) {
    const data = await getProductData(productId);
    console.log("Product")
    console.log(data)
    //business logic ...
    if (!data.inStock) {
        return { message: "The item is not in stock" };
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