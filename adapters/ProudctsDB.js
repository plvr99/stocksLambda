import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js' // 'aws-sdk' not working

const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

export async function getProduct(productId) {
    try {
        const Key = { id: productId };
        const data = await db.get({ TableName, Key }).promise();
        return data.Item;
    } catch (error) {
        console.log(error);
    }
}

export default async function postProduct(product) {
    try {
        await db.put({
            Item: product,
            TableName
        }).promise();
        return product;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(productId) {
    try {
        console.log("deleting..")
        const Key = { id: productId };
        await db.delete({ TableName, Key}).promise();
        return true;
    } catch (error) {
        console.log("ProductsDB")
        console.log(error)
    }
}

export async function updateProduct(product) {
    try {
        const params = {
            TableName,
            Key: {
                id: product.id
            },
            UpdateExpression: "SET description = :description, inStock = :inStock, price = :price, review = :review, title = :title",
            ExpressionAttributeValues: {
                ":description": product.description,
                ":inStock": product.inStock,
                ":price": product.price,
                ":review": product.review,
                ":title" : product.title,
            },
            ReturnValues: "ALL_NEW"
        };
        console.log("product to update");
        console.log(product);
        let updatedItem= await db.update(params).promise();
        console.log("updated item");
        console.log(updatedItem);
        let updatedProduct = {id : product.id, ...updatedItem.Attributes};
        return updatedProduct;
    } catch (error) {
        console.log(error);
    }
}