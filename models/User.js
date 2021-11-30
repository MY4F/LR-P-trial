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
        default: false
    },
    lastName: {
        type: String,
        default: false
    },
    organization: {
        type: String,
        default: false
    },
    workPhone: {
        type: String,
        default: false
    },
    email2: {
        type: String,
        default: false
    },
    title: {
        type: String,
        default: false
    },
    public_id_con: {
        type: String,
        default: false
    },
    contact_link: {
        type: String,
        default: false
    },
    address1: {
        type: String,
        default: false
    },
    address2: {
        type: String,
        default: false
    },
    card_type: {
        type: String,
        default: false
    },
    homePhone: {
        type: String,
        default: false
    },
    email3: {
        type: String,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
