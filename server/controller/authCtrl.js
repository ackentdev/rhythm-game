const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        console.log("login")
        let { password, username } = req.body;
        const db = req.app.get('db');
        const foundUser = await db.select_user(username)
        .catch(err => console.log(err));
        if(!foundUser.length){
            res.status(401).send('User does not exist. Please register an account');
        } else {
            const matchPasswords = await bcrypt
            .compare(password, foundUser[0].password)
            .catch(err => console.log(err));

            if(matchPasswords){
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username
                };
                res.status(200).send(req.session.user);
            } else {
                res.status(403).send("Authentication error. Password and username do not match")
            }
        };
    },
    logout: (req, res) => {
        console.log("logout")
        req.session.destroy();
        res.sendStatus(200);
    },
    register: async (req, res) => {
        console.log("register")
        const { username, password } = req.body
        const db = req.app.get('db');
        const foundUser = await db.select_user(username).catch(err => console.log(err))
        if(foundUser.length){
            res.status(409).send("That user already exists")
        } else {
            const saltRounds = 12;
            const salted = await bcrypt.genSalt(saltRounds);
            const hashed = await bcrypt.hash(password, salted);
            const newUser = await db.create_user([username, hashed])
            db.create_user_log(newUser[0].user_id)
            req.session.user = newUser;
            res.status(200).send(req.session.user);
        }
    },
    getSession: async (req, res) => {
        res.status(200).send(req.session.user);
    }
}