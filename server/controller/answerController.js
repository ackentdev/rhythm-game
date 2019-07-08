const answers = []
module.exports={
    getAnswers: (req, res) => {
        res.status(200).send(answers);
    },
    postAnswer: (req, res) => {
        const {currentAnswer} = req.body;
        answers.push({currentAnswer});
        res.status(200).send(answers);
    }
}