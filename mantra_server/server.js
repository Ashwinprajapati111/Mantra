const express = require("express")
const cors = require("cors")
const app = express();
// const expressValidator = require('express-validator')

var corsOptions ={
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
const db = require("./model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  app.use(express.json())
  // app.use(expressValidator())
  app.use(express.urlencoded({extended:true}))

require("./routes/user.routes.js")(app)
const PORT = 8080;
app.listen(PORT,()=>{
  console.log(`SERVER RUNNING ${PORT}`)
})