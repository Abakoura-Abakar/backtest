import mongoose from "mongoose";

 const Schema = mongoose.Schema

 export const SchemaUser = new Schema({
    name: {
        type: String,
        required: "Entrez votre nom"
    },
    email: {
        type: String,
        required: "Votre email"
    },

    password:{
        type: String,
        required: "Votre mot de passe"
    }
})
 


