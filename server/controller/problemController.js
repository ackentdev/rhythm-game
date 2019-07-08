const problems = [
        {
            id: 1,
            img: "http://localhost:4000/quarter4.png",
            matchId: 'aaaa',
        },
        {
            id: 2,
            img: "http://localhost:4000/quarter2-half.png",
            matchId: 'aab'
        },
        {
            id: 3,
            img: "http://localhost:4000/half-quarter2.png",
            matchId: 'baa'
        },
        {
            id: 4,
            img: "http://localhost:4000/quarter-sandwich.png",
            matchId: 'aba'
        },
        {
            id: 5,
            img: "http://localhost:4000/half2.png",
            matchId: 'bb'
        },
        {
            id: 6,
            img: "http://localhost:4000/quarter-dottedhalf.png",
            matchId: 'ca'
        },
        {
            id: 7,
            img: "http://localhost:4000/dottedhalf-quarter.png",
            matchId: 'ac'
        },
        {
            id: 8,
            img: "http://localhost:4000/whole.png",
            matchId: 'd'
        },
    ]

module.exports = {
    getProblems: (req, res) => {
        res.status(200).send(problems);
    }
    }