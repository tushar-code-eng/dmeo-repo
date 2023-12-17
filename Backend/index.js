import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import adminRoutes from './routes/admin.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL)
  .then((e) => { console.log("MongoDb connected") })

app.use('/admin',adminRoutes)



app.listen(PORT,()=> console.log(`Listening on port http://localhost:${PORT}`))