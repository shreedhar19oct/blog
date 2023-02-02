const express = require("express");
const app = express();
const PORT=process.env.PORT || 8000;

app.get("/", (req,res) => res.semd("Hello, World!"));
app.post("/", (req,res) => res.semd("Hello, World!"));

app.listen(PORT ,()=> console.log(`Server Started at port ${PORT}`));