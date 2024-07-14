
const express = require('express');
const app = express();


// app.get('/',(req,res)=>{
    // res.end("app.get çalıştı");
//     const obj={
//         error:false,
//         message:'Welcome'
//     }
// res.end(JSON.stringify(obj))
// })
// app.get('/',(req,res)=>{
//     // res.send(" Welcome To Express App");
//     res.send({
//         error:false,
//         message:'Welcome'
//     })
// })











require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT,()=>console.log('Running: http://127.0.0.1:'+PORT));
    
