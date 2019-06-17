import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let User = new Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    order: {
        type: Object,
        default: 'none'
    },

    bought: {
        type: Object,
        default: 'none'
    }

});

export default mongoose.model('User', User);