import MessageMongoDB from '../db/message.js'

/* --------------------- Message Normalization ---------------------------- */
import { normalize, schema, denormalize } from 'normalizr'
// import util from 'util'


// Author schema normalizr
const schemaAuthor = new schema.Entity('author',{},{idAttribute: 'email'});

// Message schema normalizr
const schemaMenssage = new schema.Entity('post', {
    author: schemaAuthor
},{idAttribute: '_id'})

// Post schema normalizr
const schemaPost = new schema.Entity('posts', {
  mensajes: [schemaMenssage]
},{idAttribute: 'id'})
/* ---------------------------------------------------------------------------- */

class Message {

    constructor() {
        this.messageMongoDB = new MessageMongoDB()
    }

    async getAll() {
        try {
            let messages = await this.menssageMongoDB.read()
            print(messages)
            let messageId = { 
                id: 'messages', 
                messages : messages.map( message => ({...message._doc}))
            }
            console.log(messageId);
            print(messageId)
            let messageIdN = normalize(messageId, schemaPost)
            print(messageIdN)
            return messageIdN;
        }
        catch {
            return []
        }
    }

    async create(message) {
        try {
            message.fyh = new Date().toLocaleString()
            await this.messageMongoDB.create(message)
        }
        catch(error) {
            console.log('Error saving the message', error)
        }
    }
}

export default Message
