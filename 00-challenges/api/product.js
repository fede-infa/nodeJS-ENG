import ProductMongoDB from '../db/product.js'

class Product {
    constructor() {
        this.productMongoDB = new ProductMongoDB()
    }

    async getOne(id) {
        let product = await this.productMongoDB.read(id)
        console.log(product)
        return product || {error : 'product not found'}
    }

    async getAll() {
        let products = await this.productMongoDB.read()
        return products.length? products : {error : 'There are no products'}
    }

    async create(product) {
        return await this.productMongoDB.create(product)
    }

    async update(product,id) {
        return await this.productMongoDB.updateOne(product,id)
    }

    async delete(id) {
        return await this.productMongoDB.deleteOne(id)
    }
}

export default Product
