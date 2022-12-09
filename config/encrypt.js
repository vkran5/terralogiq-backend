const jwt = require('jsonwebtoken');

module.exports = {
    createToken: (payload, expiresIn = '600') => {
        return jwt.sign(payload, 'posting', {
            expiresIn
        });
    },
    readToken: (req, res, next) => {
        console.log('token', req.token);
        jwt.verify(req.token, 'posting', (err, decode) => {
            if (err) {
                return res.status(401).send({
                    message: 'Authenticate error ❌'
                })
            }

            console.log('result token', decode);

            req.dataToken = decode;

            next();

        })
    }
}