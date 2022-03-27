import mongoose from "mongoose";
import { SchemaUser } from "../models/model"

const Users = mongoose.model('Users', SchemaUser)

export const addNewUser = (req, res)=>{
    const newUser = new Users(req.body)

    newUser.save((err, user)=>{
        if(err){ 
            console.log(err)
        }else{

            res.json(user)
        }
    })
}


export const getUsers = (req, res)=>{

    Users.find({}, (err, user)=>{
        if(err){
            console.log(err)
        }else{
            res.json(user)
        }
    })
}

export const UpdateUser = (req, res)=>{

    Users.findByIdAndUpdate(req.params.userId, req.body, { new: true}, (err, user)=>{
        if(err){
            console.log(err)
        }else{
            res.json(user)
        }
    })
}


export const deleteUser = (req, res)=>{
    Users.findByIdAndRemove(req.params.userId, (err, user)=>{
        if(err){
            console.log(err)
        }else{
            res.json({"message": "Uilistaeur suprimer avec succés !"})
        }
    })
}