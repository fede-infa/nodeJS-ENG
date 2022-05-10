import MessageMongoDB from '../db/message.js'

/* ---------------------------------------------------------------------------- */

class Message {

    constructor() {
        this.messageMongoDB = new MessageMongoDB()
    }

    async getAll() {
        try {
            return this.messageMongoDB.read();
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
