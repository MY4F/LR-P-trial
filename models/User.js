const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    bio: {
        type: String,
        default: false
    },
    icons: {
        type: String,
        default: false
    },
    links: {
        type: String,
        default: false
    },
    image1:{
        type: String,
        default: false,
    },
    image2:{
        type: String,
        default: false,
    },
    job:{
        type: String,
        default: false,
    },
    vcf:{
        type: String,
        default: false,
    },
    name2: String,
    desc:String,
    img:
        {
            data: Buffer,
            contentType: String
        },
    public_id :{
        type:String,
        default:false,
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    organization: {
        type: String,
        required: false
    },
    workPhone: {
        type: String,
        required: false
    },
    email2: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    public_id_con: {
        type: String,
        required: false
    },
    contact_link: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
