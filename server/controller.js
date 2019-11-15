module.exports = {
    getProblems: async (req, res) => {
        const db = req.app.get('db');
        const problems = await db.get_problems();
        res.status(200).send(problems)
    }
}