
const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(express.static('public'));
const products=[
{id:1,name:'Lipstick',price:499},
{id:2,name:'Shampoo',price:699},
{id:3,name:'Face Serum',price:999}
];
app.get('/',(req,res)=>res.render('index',{products}));
app.get('/health',(req,res)=>res.json({status:'ok'}));
app.listen(process.env.PORT||3000,()=>console.log('Running'));
