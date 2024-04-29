
const mongoose = require('mongoose');

const url = "mongodb+srv://dhairyajan9:Dhairya9@cluster.7a0qckj.mongodb.net/"


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
