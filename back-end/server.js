import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';

import User from './models/user';
import Products from './models/products';
mongoose.set('useFindAndModify', false);

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path');
const crypto = require('crypto');


const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:|\./g, '') + ' - ' + file.originalname);
    }
});

const app = express();
const router = express.Router();
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
});

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/upload', express.static('upload'));

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Tick');
});


router.route('/products').get((req, res) => {
    Products.find((err, products) => {
        if (err)
            console.log(err)
        else
            res.json(products)
    });
});

router.route('/product/:id').get((req, res) => {
    Products.findById(req.params.id, (err, products) => {
        if (err)
            console.log(err)
        else
            res.json(products)
    })
});

router.route('/products/add').post(upload.single('productImage'), (req, res) => {
    let products = new Products({
        name: req.body.name,
        price: req.body.price,
        sex: req.body.sex,
        height: req.body.height,
        width: req.body.width,
        description: req.body.description,
        status: req.body.status,
        productImage: req.file.path
    });
    console.log(products);
    products.save()
        .then(products => {
            res.status(200).json({ 'products': 'Add succsesfully' });
        })
        .catch(err => {
            res.status(400).send('Failed create new record');
        });
});

router.route('/products/update/:id').post((req, res) => {
    Products.findById(req.params.id, (err, products) => {
        if (!products)
            return next(new Error('Could not load document'));
        else {
            products.name = req.body.name;
            products.price = req.body.price;
            products.sex = req.body.sex;
            products.height = req.body.height;
            products.width = req.body.width;
            products.description = req.body.description;
            products.status = req.body.status;


            products.save().then(products => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});


router.route('/products/delete/:id').get((req, res) => {
    Products.findByIdAndRemove({ _id: req.params.id }, (err, products) => {
        if (err)
            res.json(err)
        else
            res.json('Remove successfully');
    });
});

router.route('/user').get((req, res) => {
    User.find((err, user) => {
        if (err)
            console.log(err)
        else
            res.json(user)
    });
});

router.route('/user/add').post((req, res) => {
    let user = new User(req.body);
    console.log(user);
    user.save()
        .then(products => {
            res.status(200).json({ 'products': 'Add succsesfully' });
        })
        .catch(err => {
            res.status(400).send('Failed create new record');
        });
});

router.route('/user/:id').get((req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err)
            console.log(err)
        else
            res.json(user)
    })
});

router.route('/user/delete/:id').get((req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
        if (err)
            res.json(err)
        else
            res.json('Remove successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));