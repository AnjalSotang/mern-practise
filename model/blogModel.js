const mongoose = require('mongoose')
//mongoose is a object or package from here we need to export schema key
const Schema = mongoose.Schema //Propeties 
//This is schema has class which is like a box
// We need to instantiated it and class are in Pascal Cashing
// Now we need to create a oject using this class
// Class is a blue print

const blogSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    subTitle: {
        type: String
    },
    description: {
        type: Text
    },
    // String can only hold a little much so
    // Description should use text
    image: {
        type: String
    }
})
//     },
//     age: {
//         type: Number
//     }
// });

// For example here we created a Table

// Package paxadi ako method ho mogoose.model(), 
// package ko paxi xaina vhaney function "model()", 
// package paxadi without paranthesis xa vhaney properties ho 

// Nosql array ni support garxa


const Blog = mongoose.model('Blog', blogSchema) //Method
//Common js
module.exports = Blog;

//By default the table is not created automatically we need to perform some task then its created
