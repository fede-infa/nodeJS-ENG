const { nanoid } = require('nanoid');
const { doc } = require('../db/connection');
const db = require('../db/connection'); // Firestore connection
const query = db.collection('contact'); // Work with 'contact' collection

exports.create = async (req, res, next) =>{
    try {
        const id = nanoid();
        const document = await query
            .doc(`${id}`)
            .create({
                first_name: 'Fede',
                last_name: 'Infa',
                email: 'infantino.fede@gmail.com'
            });
        res.json(document);
        
    } catch (error) {
        res.json(error);
    }
}

exports.getOne = async (req, res, next) =>{
    try {
        const document = await query.doc(req.params.id).get();
        res.json(document.data());        
    } catch (error) {
        res.json(error);
    }

}

exports.getAll = async (req, res, next) =>{
    try {
        const all = await query.get();
        const docs = all.docs;
        const response = docs.map( doc => ({
            id: doc.id,
            ...doc.data()
        }))
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

exports.update = async (req, res, next) =>{
    const response = await query.doc(req.params.id).update({
        ...req.body
    });
    res.json(response);
}

exports.delete = async (req, res, next) =>{
    const response = await query.doc(req.params.id).delete();
    res.json(response);

}

/* NANO ID
 1. Library that generates a random ID, type UUID (Universal Unique ID)
 2. Firestore doesn't create an ID by itself

*/