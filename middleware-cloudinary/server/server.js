require('dotenv').config()

const express=require('express');

const app=express();

const PORT=process.env.PORT || 5688;

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})