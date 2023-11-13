import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from "./router/route.js";

import connect from './database/connection.js'



const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();
const port = process.env.PORT || 8080;
connect();

app.use('/api', router)//api
app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    }
    catch {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`)
})


// connect().then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`)
//         })
//     }
//     catch (error) {
//         console.log("Cannot connect to the server");
//     }

// }).catch(error => {
//     console.log("Invalid Database Connection");
// })
