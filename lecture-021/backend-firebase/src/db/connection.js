const admin = require('firebase-admin'); // dependency installed

// In a real project, the APIkey file should be updated to a Storage/S3/SharePoint static service. In the .env we put the path to the file
const { AUTHENTICATION } = require('../config/globals') // path to APIKey file
const serviceAccount = require(AUTHENTICATION); // JSON APIKey

// Connection to the Firebase DB
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://lecture-21.firebaseio.com", // <db_name>.firebase.io || <db_name>.<region>.firebasedatabase.app
});

module.exports = admin.firestore();