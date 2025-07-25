const mongoose = require('mongoose');

async function connectToDB(){
    // Connection of Clusters 
    await mongoose.connect(`mongodb+srv://student:student@user.7defuru.mongodb.net/student

`)
}

module.exports = {
    connectToDB
}