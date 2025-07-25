const express = require('express');
const userRouter = express.Router();

userRouter.get('/profile', (req, res) => {
    res.send(`Welcome ${req.user.firstName}<br>
    Your email is ${req.user.email}`);
});

module.exports = {
    userRouter,
};
