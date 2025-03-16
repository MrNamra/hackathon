const jwt = require('jsonwebtoken');

const generateToken = (userdata) => {
    return jwt.sign(userdata, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = { 
    generateToken
}