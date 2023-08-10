const express=require('express')
const app=express()
const port=process.env.PORT 
const mongodb=require('./database.js')
const cors=require('cors')
mongodb()

app.get('/',(req,res)=>{
    res.send("hii")
})
app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/signup.js'))
app.use('/api',require('./routes/login.js'))
app.use('/api',require('./routes/orderdata.js'))
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})