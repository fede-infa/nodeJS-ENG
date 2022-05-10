import mongoose from 'mongoose'

export class MongoDB {

    constructor(URL) {
        this.URL = URL

        process.on('exit', () => {
            this.close()
        })
    }

    async connect(URL) {
        try {
            await mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true })
        }
        catch(err) {
            console.log(`MongoDB: Error on connection: ${err}`)
            throw err
        }
    }
    close() {
        console.log('Closing connection to MongoDB!');
    }
}