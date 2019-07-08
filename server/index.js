const express = require('express');
const app = express();
const port = 4000;
const { getProblems } = require("./controller/problemController");
const { getAnswers, putAnswer } = require("./controller/answerController")
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get("/api/problems", getProblems);

app.get("/api/answers", getAnswers);
app.put("/api/answers/:id", putAnswer)


app.listen(port, () => 
console.log(`Server listening on ${port}`));