const jwt = require("jsonwebtoken");
const createError = require("../helpers/createError");
const UsersModule = require("../users");
const RolesModule = require("../roles");
const { HttpStatus } = require("../helpers");

// const roles = ["ADMIN", "USER"];

const { JWT_SECRET_KEY } = process.env;

async function UserCheck({ actionName = null, checkStatus = false }) {
  async function authenticate(req, _res, next) {
    try {
      const { authorization } = req.headers;

      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer") {
        throw createError({ status: 401, message: null });
      }

      const { id, role, status } = jwt.verify(token, JWT_SECRET_KEY);

      const user = await UsersModule.UserServise.findUserById(id);

      if (!user || !user.token || user.token !== token) {
        throw createError({ status: 401, message: null });
      }

      if (actionName) {
        const userRole = await RolesModule.RolesService.findRoleByName(role);

        if (!userRole.actions.includes(role)) {
          throw createError({
            status: HttpStatus.FORBIDDEN,
            message: UsersModule.UserMessages.FORBIDDEN_ACTION,
          });
        }
      }

      if (checkStatus && !status) {
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

module.exports = UserCheck;
