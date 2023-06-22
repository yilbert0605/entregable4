const {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  logged,
  verifyCode,
  resetPassword,
  updatePassword,
} = require("../controllers/user.controlles");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const routerUser = express.Router();

routerUser.route("/").get(verifyJWT, getAll).post(create);

routerUser.route("/login").post(login);

routerUser.route("/me").get(verifyJWT, logged);

routerUser.route("/reset_password").post(resetPassword);

routerUser
  .route("/:id")
  .get(verifyJWT, getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

routerUser.route("/verify/:code").get(verifyCode);

routerUser
  .route("/reset_password/:code") // /reset_password/:code
  .post(updatePassword);

module.exports = routerUser;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJlbWFpbCI6InlpbGJlcnQwNkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJ5aWxiZXJ0IGRhbmllbCIsImxhc3ROYW1lIjoib3NvcmlvIiwiY291bnRyeSI6IkFyZ2VudGluYSIsImltYWdlIjoiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9PSVAuTW9vS3haS1U5V2xRMWlrR0lpYXJCUUhhSDA_dz0xNjMmaD0xODAmYz03JnI9MCZvPTUmZHByPTMmcGlkPTEuNyIsImlzVmVyaWZpZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDYtMjBUMTk6NTU6NDIuMzI3WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMjBUMjA6MDQ6MjcuNTQ2WiJ9LCJpYXQiOjE2ODc0MDY0NjksImV4cCI6MTY4NzQ5Mjg2OX0.WKICErTZ45-UbuHcDhYlADoXAx0uGMmsf5MoaTnF6E4
