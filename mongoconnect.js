var mongoose = require('mongoose')
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Todo1App');
var Schema = mongoose.Schema

var schema = new Schema({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    clientId: {
        type: String,
        trim: true
    },
    clientSecret: {
        type: String,
        trim: true
    }
})
var DeviceAuthentication = mongoose.model('DeviceAuthentication', schema)

//  module.exports = { DeviceAuthentication }

var newDevice = new DeviceAuthentication({
    username: "avijit.ghosh@truringsoftek.com",
    password: "K4Mobility",
    clientId: "2b4058df7ce66ef45f88ecc8b5e67323",
    clientSecret: "ee6c9f77dce373198c384628519"
})

newDevice.save().then((docs, err) => {
    if(err) {
        console.log("Error", err)
    } else {
        console.log("Saved", docs)
    }
})

module.exports = { DeviceAuthentication }