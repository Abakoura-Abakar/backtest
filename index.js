import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
const { createProxyMiddleware } = require('http-proxy-middleware');
import cors from 'cors'
import  routes from './src/routes/route'


const PORT = 4000

const app = express()

//connexion a la base de donnée Mongodb avec mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/App', { useNewUrlParser: true })

//parse data
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app) 

//static files
app.use(express.static('public'))

app.use(cors())



app.listen(PORT, ()=>{
    console.log(`Le serveur du developpement est demarrer sur le port: ${PORT}`)
})

