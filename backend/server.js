const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin123",
    database:"test"
}) 

app.get('/',(req,resp)=>{
    let sql="SELECT * FROM products";

    db.query(sql,(err,data)=>{
        if(err){
            return resp.json(err);
        }
        return resp.json(data);
    })
})

app.post('/create',(req,resp)=>{
    const sql="INSERT INTO products(name,qty) values(?)";
    const values=[
        req.body.name,
        req.body.qty,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return resp.json(err);
        }
        return resp.json("Created");
    })
})

app.get('/details/:id',(req,resp)=>{
    const sql="SELECT * FROM products WHERE id=?";
    const id=req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err){
            return resp.json(err);
        }
        return resp.json(data);
    })
})

app.listen(8081,()=>{
    console.log("Listening.....")
})