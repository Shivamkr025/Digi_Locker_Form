import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import aadhaarFile from './router/AadhaarAndIdCardRouter.js'
import workflowFile from './router/workflowRouter.js'

const app = express()
const PORT = 7155

app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use('/' , aadhaarFile)
app.use('/' , workflowFile)

const ConnectDB = "mongodb+srv://shivam22:shivam22@shivam.n1mrvon.mongodb.net/Digilocker?retryWrites=true&w=majority&appName=shivam"

mongoose.connect(ConnectDB)
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

