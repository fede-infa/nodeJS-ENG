class File{
    fs = require('fs');
    constructor(file){
        this.file = `${__dirname}/${file}`
    }

    async read(){
        try{
            const products = await this.fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        } catch (err){
            return [];
        }
    }

    async create(product){
        const products = await this.read();
        product.id = products[products.length -1].id + 1;
        products.push(product);
        try{
            await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
            return product;
        }
        catch (err){
            return err;
        }
    }

    async update(updatedProduct){
        let products = await this.read();
        const indexOfProduct = products.findIndex( product => product.id == updatedProduct.id);
        console.log(indexOfProduct);
        products.splice(indexOfProduct, 1, updatedProduct);
        try {
            if(indexOfProduct != -1){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return updatedProduct;
            } else {
                return {resultado: 'Error', mensaje: `No se encontro producto con el ID ${updatedProduct.id}`};
            }
        } catch (err) {
            return err;
        }

    }

    async delete(id){
        let products = await this.read();
        const indexToDelete = products.findIndex( product => product.id == id);
        const deletedProduct = products[indexToDelete];
        products = products.filter( product => product.id != id);
        try{
            if(deletedProduct){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return deletedProduct;
            } else {
                return {resultado: 'Error', mensaje: `No se encontro producto con el ID ${id}`};
            }
        } catch (err){
            console.log('entro en error')
            return err
        }
    }
}

module.exports = new File('products.txt');