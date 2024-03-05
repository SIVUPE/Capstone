import express from 'express';
import bodyParser from "body-parser";
import { users } from '../model/index.js';
import { verifyAToken } from '../middleware/AuthenticateUser.js';


const userRouter = express.Router()
// Fetch users
userRouter.get('/',(req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
 })
  
 userRouter.get('/:id',(req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
 })

 
 userRouter.post('/register', bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new user.'
        })
    }
 })
   
 userRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
      users.updateUser(req, res)
    } catch(e) {
      res.json({
        status: res.statusCode,
        msg: 'Failed to update user',
      })
    }
  })
  
  userRouter.delete('/delete/:id', (req, res) => {
    try {
      users.deleteUser(req, res)
    } catch(e) {
      res.json({
        status: res.statusCode,
        msg: 'Failed to delete user',
      })
    }
  })
  
  userRouter.post('/login', bodyParser.json(), (req, res) => {
    try {
      users.loginUser(req, res)
    } catch(e) {
      res.json({
        status: res.statusCode,
        msg: 'Failed to login',
      })
    }
 });


 export{
    userRouter,
    express,
    verifyAToken
 }