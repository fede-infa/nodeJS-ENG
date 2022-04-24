class Product{
    fs = require('fs');
    file = 'products.txt';

    constructor(title, price, thumbnail){
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail
    }

    async read(){
        try {
            const products = await this.fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        } catch (error) {
            return [];
        }
    }

    async create(product){
        try {
            const products = await this.read();
            product.id = products[products.length - 1].id + 1;
            products.push(product);
            await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
            return product;
        } catch (error) {
            return error;   
        }
    }

    async update(updatedProduct){
        try {
            let products = await this.read();
            const indexOfProduct = products.findIndex(product => product.id == updatedProduct);
            if(indexOfProduct != -1){
                products.splice(indexOfProduct, 1, updatedProduct);
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
            } else{
                return {status: 'Error', message: `There is no product with ID ${updatedProduct.id}`};
            }
        } catch (error) {
            return error;
        }
    }

    async delete(id){
        try {
            let products = await this.read();
            const indexToDelete = products.findIndex(product => product.id == id);
            const deletedProduct = products[indexToDelete];
            if(deletedProduct){
                products = products.filter( product => product.id != id);
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return deletedProduct;
            } else{
                return {status: 'Error', message: `There is no product with ID ${id}`};
            }
        } catch (error) {
            return error;
        }
    }
}

module.exports = Product;