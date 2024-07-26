import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { test1 } from './backend/controllers/aprob.controller.js'; 
import { test2 } from './backend/controllers/reme.controller.js';
import { test3 } from './backend/controllers/repro.controller.js';
dotenv .config();
//importaciones de librerias las cuales nos va a servir para desarrollar el proyecto
mongoose.connect(process.env.urldb)




.then(()=>{
    console.log('sis')
})
.catch((err)=>{
    console.log('nel')
})


const app = express();
app.use(cors())
app.listen(4001,()=>{
    console.log("esta funcionando correctamente el servidor")
})

test1()
test2()
test3()