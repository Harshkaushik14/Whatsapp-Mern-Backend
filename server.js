//IMPORTING
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
//APP CONFIG
const app = express();
const port = process.env.PORT || 9000;

//MIDDLEWARE

//DB CONFIG
const connection_url = 'mongodb+srv://Harsh:oFwVRLCT96Gghef3@cluster0.luw2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
useCreateIndex: true,
useNewUrlParser:true,
useUnifiedTopology: true
});

//????

//API ROUTES
app.get('/',(req,res)=>res.status(200).send('hello world'));

app.post('/messages/new',(req,res) =>{
const dbMessage = req.body

Messages.create(dbMessage , (err , data) =>{
    if(err){
   res.status(500).send(err)
    }else{
res.status(201).send(data)
    }
})
});

//LISTEN

app.listen(port,()=>console.log(`Listening on localhost:${port}`));

//oFwVRLCT96Gghef3