/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({   
        uid:{type:String},
        userName:{ type: String },
        password:{ type: String },
        phone:{ type: String },
        email:{ type: String },
        company:{type:String },
        major:{ type: String }
});

module.exports = mongoose.model('User',UserSchema);