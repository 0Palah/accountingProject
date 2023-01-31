const createError = require("../helpers/createError");
const AuthServise = require("../auth/auth.service");
const RolesService = require("../roles/roles.service");
const AuthMessages = require("../auth/auth.messages");
const { HttpStatus } = require("../helpers");

function UserCheck({ actionName = "", checkStatus = false } = {}) {
  console.log("UserCheck actionName ======= >>>>>>>>>", actionName);

  async function authenticate(req, res, next) {
    try {
      const { role, status, user } = await AuthServise.UserCheckByToken(
        req,
        res,
        next
      );

      if (checkStatus && !status) {
        throw createError({
          status: HttpStatus.FORBIDDEN,
          message: AuthMessages.FORBIDDEN_ACTION,
        });
      }

      if (actionName) {
        const { canActive } = await RolesService.UserCheckByRole({
          role,
          actionName,
          error: {
            status: HttpStatus.FORBIDDEN,
            message: AuthMessages.FORBIDDEN_ACTION,
          },
        });
        console.log("by role", canActive);
      }

      req.user = user;

      next();
    } catch (error) {
      if (!error.status) {
        error.status = HttpStatus.UNAUTHORIZED;
        error.message = AuthMessages.FORBIDDEN_ACTION;
      }

      next(error);
    }
  }
  return authenticate;
}

module.exports = UserCheck;
