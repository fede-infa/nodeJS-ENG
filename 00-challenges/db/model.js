import mongoose from 'mongoose';

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    thumbnail: String
});

const messageSchema = mongoose.Schema({
  author: Object,
  text: String,
  fyh: String
});

export const products = mongoose.model('products', productSchema);
export const messages = mongoose.model('messages', messageSchema);

