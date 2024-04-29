const dotenv = require('dotenv')
dotenv.config();

const mongoose = require('mongoose');

const url = process.env.DB_URL


module.exports.connectUsingMongoose = async function(){
    try{ await mongoose.connect(`${url}/CSVfiles`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB connected using mongoose");
} catch (err) {
    console.log(err);
}
}
