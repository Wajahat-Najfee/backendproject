const mongoose = require('mongoose');

async function connectToDB(){
    // Connection of Clusters 
    await mongoose.connect(process.env.MONGOURI)}

module.exports = {
    connectToDB
}