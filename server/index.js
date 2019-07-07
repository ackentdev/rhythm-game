const express = require('express');
const app = express();
const port = 4000;
const { getProblems } = require("./controller/inputController");

app.use(express.json());

app.get("/api/problems", getProblems)

app.listen(port, () => 
console.log(`Server listening on ${port}`));