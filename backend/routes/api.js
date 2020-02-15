const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');  
const User = require('../models/user')
const db = "mongodb://localhost:27017/eventsdb";
//"mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";
mongoose.connect(db, err =>{
    if(err){
        console.error('Error!'+err)
    }else{
        console.log('Connected to database')
    }
})

function verifyToken(req,res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send("Unauthorized request")
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/', (req, res)=>{
    res.send('From API router ')
})

router.post('/register', (req,res)=>{
    let userData = req.body 
    let user = new User(userData)
    user.save((error, registerUser)=>{
        if(error){
            console.log(error)
        }else{
            let payload = { subject: registerUser._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    })
}) 

router.post('/login', (req, res)=>{
    let userData = req.body
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
            if( user.password !== userData.password ){
                res.status(401).send('Invalid password')
            }else{
                let payload = {subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

router.get('/events', (req,res)=>{
    let events = [
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },

    ]
    res.json(events)
})

router.get('/special', verifyToken, (req,res)=>{
    let special = [
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },
        {
            "id": "1",
            "Name": "Satendra singh",
            "Description": "lorem ipsum",
            "Date": "2012-04-23T18:25:43.254125"
        },

    ]
    res.json(special)
})
module.exports = router