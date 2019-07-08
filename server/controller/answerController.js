const answers = [
    {
        id: 1,
        answer: []
    },
    {
        id: 2,
        answer: []
    },
    {
        id: 3,
        answer: []
    },
    {
        id: 4,
        answer: []
    },
    {
        id: 5,
        answer: []
    },
    {
        id: 6,
        answer: []
    },
    {
        id: 7,
        answer: []
    },
    {
        id: 8,
        answer: []
    }
]


module.exports={
    getAnswers: (req, res) => {
        res.status(200).send(answers);
    },
    putAnswer: (req, res) => {
        console.log(req.body)
        const {avenger} = req.body;
        const updateId = req.params.id;
        const answerIndex = answers.findIndex(answer => answer.id == updateId);
        let elem = answers[answerIndex];

            elem.answer.push(avenger)
        
        res.status(200).send(answers);
    }
}