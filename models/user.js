const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: { type: String, required: true, text: true },
    password: { type: String, required: true },
    emailAddress: { type: String, text: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Comic'}],
    reviews  : [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    fans     : [{ type: Schema.Types.ObjectId, ref: 'User'}],
    follows :  [{ type: Schema.Types.ObjectId, ref: 'User'}],
    comments:  [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
},{
    timestamps: true
})

UserSchema.pre('save', function(next){
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt){
        this.createdAt = now;
    }

    const user = this;
    if (!user.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function(password, done){
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    })
}

module.exports = mongoose.model('User', UserSchema)