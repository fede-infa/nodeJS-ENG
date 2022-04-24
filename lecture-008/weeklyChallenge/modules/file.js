class File{
    fs = require('fs');
    constructor(file){
        this.file = `${__dirname}/${file}`
    };

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
            product.id = products.length + 1;
            products.push(product);
            
            await this.fs.promises.appendFile(this.file, JSON.stringify(products, null, '\t'));
            return products;
        } catch (error) {
            return error;
        }
    }
}
    
module.exports = new File('products.txt');