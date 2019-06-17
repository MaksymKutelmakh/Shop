import mongoose from 'mongoose';
import { FILE } from 'dns';


const Schema = mongoose.Schema;

let Products = new Schema({

    name: {
        type: String
    },

    sex: {
        type: String
    },

    price: {
        type: Number
    },

    height: {
        type: Number
    },

    width: {
        type: Number
    },

    description: {
        type: String
    },

    status: {
        type: String,
        default: 'Present'
    },

    productImage: {
        type: String
    }


});

export default mongoose.model('Products', Products);