const { dbConf, dbQuery } = require('../config/db');
const { createToken } = require('../config/encrypt');

module.exports = {
    login: async (req, res) => {
        try {

            const { username, password } = req.body;

            let resUsers = await dbQuery(`SELECT * FROM users ${username.includes('@') && username.includes('.co') ? `WHERE email  = ${dbConf.escape(username)}` : `WHERE username  = ${dbConf.escape(username)}`}  AND password = ${dbConf.escape(password)} ;`)

            if (resUsers.length > 0) {

                let token = createToken({ ...resUsers[0] });

                res.status(200).send({
                    ...resUsers[0],
                    token,
                    massage: 'Login success',
                    success: true
                });

            } else {
                res.status(401).send({
                    success: false,
                    massage: 'Login failed'
                });
            }

        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    },
    KeepLogin: async (req, res) => {
        try {

            let resUsers = await dbQuery(`SELECT * FROM users idusers = ${(req.dataToken.idusers)}};`)

            if (resUsers.length > 0) {

                let token = createToken({ ...resUsers[0] });

                res.status(200).send({
                    ...resUsers[0],
                    token,
                    massage: 'Login success',
                    success: true
                });

            } else {
                res.status(401).send({
                    success: false,
                    massage: 'Login failed'
                });
            }

        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
}