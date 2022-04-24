const fs = require('fs');

class File{
    constructor(fileName){
        this.fileName = fileName
    }

    async read(){
        // If file exists, show on console a list of all the products as an array, else empty array
        try {
            let products = await fs.promises.readFile(this.fileName, 'utf-8');
            console.log(products);
            return JSON.parse(products);
        } catch (error) {
            return []
        }
    }

    async save(newProduct){
        try {
            let products = await this.read();
            newProduct.id = products.length + 1;
            products.push(newProduct);
            console.log(products);
            await fs.promises.writeFile(this.fileName, JSON.stringify(products, null, '\t'));
        } catch (error) {
            console.log(`Alert! ${error}`);
        }
    }

    async delete(){
        try {
            await fs.promises.unlink(this.fileName);
        } catch (error) {
            console.log(`File couldn't be deleted ${error}`);
        }
    }
}

let productFile = new File('products.txt');

const product1 = {
    title: 'Bottle',
    price: 4,
    thumbnail: 'photo.jpg'
};

const product2 = {
    title: 'Mouse',
    price: 40,
    thumbnail: 'photo.jpg'
};

const product3 = {
    title: 'Phone',
    price: 120,
    thumbnail: 'photo.jpg'
};

(async () => {
    await productFile.read();
    await productFile.save(product1);
    await productFile.delete();
    await productFile.save(product2);
    await productFile.save(product3);
})();