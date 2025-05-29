const express = require("express")
const app = express()
const db = require("./models/connection")

const PORT = 3000

app.use(express.json())

// CREATE
app.post("/adduser", (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.mobile,
        city: req.body.city
    }
    const sql = "INSERT INTO employee SET ?"
    db.query(sql, user, (err, result) => {
        if (err) console.log(err.sqlMessage)
        else res.json(result)
    })
})

// READ ALL
app.get("/getuser", (req, res) => {
    const sql = "SELECT * FROM employee"
    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage)
        else res.json(result)
    })
})

// READ SINGLE
app.get("/getuser/:emailId", (req, res) => {
    const sql = `SELECT * FROM employee WHERE email = "${req.params.emailId}"`
    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage)
        else res.json(result)
    })
})

// UPDATE
app.put("/updateuser/:id", (req, res) => {
    const { name, email, mobile, city } = req.body
    const sql = `UPDATE employee SET name=?, email=?, phone=?, city=? WHERE id=?`
    db.query(sql, [name, email, mobile, city, req.params.id], (err, result) => {
        if (err) console.log(err.sqlMessage)
        else res.json(result)
    })
})

// DELETE
app.delete("/deleteuser/:id", (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`
    db.query(sql, [req.params.id], (err, result) => {
        if (err) console.log(err.sqlMessage)
        else res.json(result)
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})
0
