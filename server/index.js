const express = require('express');
const app = express();
const port = 4000;
const { getProblems, avengersAssemble } = require("./controller/inputController");
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get("/api/problems", getProblems);
app.post("/api/problems", avengersAssemble);
// app.put("/api/problems:id?currentAnswer", avengersAssemble);


app.listen(port, () => 
console.log(`Server listening on ${port}`));