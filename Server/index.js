const express =require('express');
const app = express();
app.use(express.json());

const {body, validationResult} = require('express-validator');

require('./db/connection');
const Users=require('./Models/User');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.post("/", [
    body('email').isEmail(),
    body('name').isLength({min : 8})]

    ,async(req, res) => {

        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error : error.array()});
        }

    let user = new Users(req.body);
    let result = await user.save();
    console.log("result", user);
    res.send(result);
})


app.listen(4000);