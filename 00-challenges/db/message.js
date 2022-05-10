import * as model from './model.js'

class MessageMongoDB {
    constructor() {}

    read() {
        return model.messages.find({})
    }
    
    create(message) {
        const messageModel = new model.messages(message);
        return messageModel.save()
    }
}

export default MessageMongoDB

