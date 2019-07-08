const express = require('express');
const app = express();
const port = 4000;
const { getProblems } = require("./controller/problemController");
const { getAnswers, postAnswer } = require("./controller/answerController")
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get("/api/problems", getProblems);

app.get("/api/answers", getAnswers);
app.post("/api/answers", postAnswer)


app.listen(port, () => 
console.log(`Server listening on ${port}`));