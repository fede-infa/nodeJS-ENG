import * as model from './model.js'

class ProductMongoDB {
    constructor() {}

    read(id) {
        return id? 
            model.products.find({_id:id}) : 
            model.products.find({})
    }
    
    create(product) {
        const productoModel = new model.products(product);
        return productoModel.save()
    }

    updateOne(product, id) {
        return model.products.updateOne( {_id: id }, { $set: {...product} })
    }
    
    deleteOne(id) {
        return model.products.deleteOne( {_id: id })
    }
}

export default ProductMongoDB

