const express = require ('express');
const { checkToken } = require('./Middlewere');
require('dotenv').config();
let app = express();
app.use(express.json());

// let myToken = "12345"

// let checkToken = (req, res, next)=>{
//     if(req.query.token == "" || req.query.token == undefined){
//         return res.send ({
//             status: 0,
//             msg: "Please fill the token"
//         })
//     }
//     if(req.query.token != myToken){
//         return res.send ({
//             status: 0,
//             msg: "Please fill the correct token"
//         })
//     }
//     next();
// }

// app.use(checkToken);

//get method
app.get('/',(req, res)=>{
    res.send({ status:1, msg:"Home API"});
})

app.get('/about', checkToken, (req, res)=>{
    res.send({ status:1, msg: "About Page API"});
})

//params
app.get('/news/:id', (req, res)=>{
    let currentId = req.params.id;
    res.send("Params data API"+ currentId);
})

//post method
app.post('/login', (req, res)=>{
    let bodyData = req.body;
    let queryData = req.query;
    res.send({ status:1, msg: "Login API", bodyData, queryData});
})

app.listen(process.env.PORT)//localhost:3000