const router = require('express').Router();
const document = require('./documents');
const article = require('./article')

router.get('/',(req,res)=>{
    res.status(200).send('i am express')
})

router.use('/article',article);
// router.use('/document',document)
module.exports=router