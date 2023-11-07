import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"laptedeurs",
    database:"blanitz"
})

app.use(express.json())

app.get("/", (req, res)=>{
    res.json("hello this is backend");
})

app.get("/adoptii", (req, res)=>{
    const q = "SELECT * FROM pets"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/blanitz/:id", (req, res)=>{
    const blanitzID = req.params.id
    const q = "SELECT * FROM pets WHERE `id` = ?"
    db.query(q, [blanitzID], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/blog", (req, res)=>{
    const q = "SELECT * FROM `post_blog`"
    db.query(q, (err, data)=>{
        if (err) console.log(err)
        return res.json(data)
    })
})

app.get("/comms/:id", (req, res)=>{
    const postID = req.params.id
    const q = "SELECT * FROM comentarii WHERE postID =?" 
    db.query(q, [postID], (err, data)=>{
        if(err) return(err)
        return(res.json(data))
    })
})

app.get("/blogS/:id", (req, res) => {
    const postID = req.params.id
    const q = "SELECT * FROM post_blog WHERE id = ?"
    db.query(q, [postID], (err, data)=>{
        if(err) return (err)
        return(res.json(data))
    })
})

app.post("/adoptii", (req, res)=>{
    const q = "INSERT INTO pets (`nume`, `datan`, `tip`, `poza`, culoare) VALUES (?)"
    const values = [
        req.body.nume,
        req.body.datan,
        req.body.tip,
        req.body.poza,
        req.body.culoare
    ]

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("pet uploaded successfully")
    } )
})

app.listen(8800, ()=>{
console.log("connected  to backend")
})