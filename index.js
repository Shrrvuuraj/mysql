const express=require("express");
const app=express();
const db=require("./models/connection")

const PORT=3000;

app.use(express.json())// ye hai middle ware ye pdhna hai sahi se yaha ye kaam kraa hai json file ko smjhne me



app.listen(PORT,()=>{
     console.log(`Server is running on port http//localhost:${PORT}`);
     
     

})