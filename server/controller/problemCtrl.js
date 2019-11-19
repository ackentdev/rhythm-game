module.exports = {
    getProblems: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.body;
        const problems = await db.get_problems(user_id);
        res.status(200).send(problems)
    }
}