import mongoose from "mongoose";

const schema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
});

const service = mongoose.model('service', schema);

// The mongoose.model() function creates a model from the schema. The first argument 'service' is the singular name of the MongoDB collection that this model represents (Mongoose will look for the pluralized version of this name in the database, in this case 'services').

// The model allows you to perform CRUD (Create, Read, Update, Delete) operations on the services collection in the database. In other words, using this model, you can add new services, retrieve existing services, update services, or delete services from the services collection.

export default service;

// tipul asta de date va ajunge in MongoDB; 