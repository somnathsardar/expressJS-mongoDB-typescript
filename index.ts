import mongoose from 'mongoose'
import app from "./src/app"

const PORT:any = process.env.PORT ? process.env.PORT : 8000;
const uri: string = process.env.DATABASE_URL + '/' + process.env.DATABASE_NAME

// MongoDB connection
mongoose.connect(uri).then(()=>{
  console.log('Database connected')
  
  // Start express server.
  app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+PORT)
  })
}).catch(err => {
  console.log('Unable to connect to database.')
  console.log(err.message)
})