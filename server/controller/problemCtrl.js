module.exports = {
    getProblems: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const problems = await db.get_problems(user_id);
        res.status(200).send(problems)
    },
    updateProblemStatus: async (req, res) => {
        const db=req.app.get('db');
        const {user_id} = req.session.user;
        const {answer_id} = req.params
        const updated = await db.update_correct([user_id, answer_id]);
        res.status(200).send(updated)
    }
}