const mySql=require("mysql");

const db=mySql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"employee"

})

db.connect(
     (err)=>{
          if(err) throw err.sqlMessage
          else console.log("DataBase Connected !!!")

     }     
)
module.exports=db;
