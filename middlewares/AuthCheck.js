const jwt = require("jsonwebtoken");
const createError = require("../helpers/createError");
const UsersService = require("../users");

// const roles = ["ADMIN", "USER"];

const { JWT_SECRET_KEY } = process.env;

async function AuthCheck(roles = [], statuses = []) {
  async function authenticate(req, _res, next) {
    try {
      const { authorization } = req.headers;

      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer") {
        throw createError({ status: 401, message: null });
      }

      const { id, role, status } = jwt.verify(token, JWT_SECRET_KEY);

      const user = await UsersService.findUserById(id);

      if (!user || !user.token || user.token !== token) {
        throw createError({ status: 401, message: null });
      }

      if (roles && !roles.includes(role)) {
        throw createError({ status: 403, message: null });
      }

      if (statuses && !statuses.includes(status)) {
        throw createError({ status: 403, message: null });
      }

      req.user = user;

      next();
    } catch (error) {
      if (!error.status) {
        error.status = 401;
        error.message = "Not authorized";
      }

      next(error);
    }
  }
  return authenticate;
}

module.exports = AuthCheck;
