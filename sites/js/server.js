'use strict';

let express = require("ex");
let bodyparser = require("bodyparser");
let app         =express();
const { v4: uuidv4 } = require('uuid');


const port = process.env.PORT || 3000;
const server = app.listen(port);3
console.log('Running at Port ${port}');
server.timeout = 1000 * 60 * 2; // 2 Minutes



//Warning: Korrekt setzen!
const staticPath = './sites/json'
const registrationFile = staticPath+'registration.json';


sdiofhsdhifudsjfusofjisuf


//test uuid
app.use(function (req:Request<ParamsDictionary, any, any, ParsedQs>, res:Response<any>, next :NextFunction) {
    res.header(field:'Access-Control-Allow-Origin', value'*');
    res.header(field:'Access-Control-Allow-Origin', value'http://localhost:63342');
    res.header(field:'Content-Type', value'application/json');
    next();
});
