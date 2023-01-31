const jwt = require("jsonwebtoken");
const createError = require("../helpers/createError");
const AuthServise = require("../auth/auth.service");
const AuthModule = require("../auth");
const RolesModule = require("../roles");
const { HttpStatus } = require("../helpers");

const { JWT_SECRET_KEY } = process.env;

async function UserCheckByToken({ req, _res, next }) {
  try {
    const { authorization } = req.headers;

    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw createError({ status: HttpStatus.UNAUTHORIZED, message: null });
    }

    const { id, role, status } = jwt.verify(token, JWT_SECRET_KEY);

    const user = await AuthServise.findUserById(id);

    if (!user || !user.token || user.token !== token) {
      throw createError({ status: HttpStatus.UNAUTHORIZED, message: null });
    }

    return { canActive: true, id, role, status, user };
  } catch (error) {
    if (!error.status) {
      error.status = HttpStatus.UNAUTHORIZED;
      error.message = AuthModule.AuthMessages.NOT_FOUND_USER;
    }

    next(error);
  }
}
async function UserCheckByRole({ role, actionName }) {
  const userRole = await RolesModule.RolesService.findRoleByName(role);

  if (!userRole.actions.includes(actionName)) {
    throw createError({
      status: HttpStatus.FORBIDDEN,
      message: AuthModule.UserMessages.FORBIDDEN_ACTION,
    });
  }
  return { canActive: true };
}

async function UserCheck({ actionName = null, checkStatus = false }) {
  async function authenticate(req, _res, next) {
    try {
      const { role, status, user } = await UserCheckByToken({
        req,
        _res,
        next,
      });

      if (checkStatus && !status) {
        throw createError({
          status: HttpStatus.FORBIDDEN,
          message: AuthModule.AuthMessages.FORBIDDEN_ACTION,
        });
      }

      if (actionName) {
        const { canActive } = await UserCheckByRole({ role, actionName });
        console.log("by role", canActive);
      }

      req.user = user;

      next();
    } catch (error) {
      if (!error.status) {
        error.status = HttpStatus.UNAUTHORIZED;
        error.message = AuthModule.AuthMessages.FORBIDDEN_ACTION;
      }

      next(error);
    }
  }
  return authenticate;
}

module.exports = UserCheck;
