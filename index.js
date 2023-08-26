require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const router = require("./routes/routes");

const PORT = process.env.PORT || 8000;

app.use("/", router);
app.use(cors());
app.use(express.json());

// app.get("/", (req,res)=> {
// res.send("la pagina de inicion desde app")
// })


app.listen(PORT, () => {
    console.log(`server listering on port ${PORT}`);

}); 