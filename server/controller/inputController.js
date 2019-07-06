const problems = [
        {
            id: 1,
            img: "../enemyLibrary/quarter4.png",
            matchId: 'aaaa'
        }]

module.exports = {
    getProblems: (req, res) => {
        res.status(200).send(problems);
    }
}