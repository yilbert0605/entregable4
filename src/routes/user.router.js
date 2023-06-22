const { getAll, create, getOne, remove, update, login, logged, verifyCode, resetPassword, updatePassword } = require('../controllers/user.controlles');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get( getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

    routerUser.route('/me')
    .get(verifyJWT, logged)

    routerUser.route('/reset_password')
        .post(resetPassword)

routerUser.route('/:id')
    .get( getOne)
    .delete( remove)
    .put( update);

routerUser.route('/verify/:code')
.get(verifyCode)

routerUser.route('/reset_password/:code')// /reset_password/:code
    .post(updatePassword)

module.exports = routerUser;