import { addNewUser, deleteUser, getUsers, UpdateUser } from "../controllers/controller"

const routes = (app)=>{

    app.route('/user')
        .get((req, res, next)=>{
            console.log("Requet Get avec sucées dans la route /user")
            next()
        }, getUsers)

        .post((req, res, next)=>{
            console.log("Requet Post avec succées dans la route /user")
            next()
        }, addNewUser)

    app.route('/user/:userId')
        .get((req, res)=>{
            res.send("Request Get avec succées dans la route /user/:userId")  
        })

        .put((req, res, next)=>{
            console.log("Request Put avec succées dans la route /user/:userId") 
            next()
        }, UpdateUser)

        .delete(deleteUser)

}


export default routes