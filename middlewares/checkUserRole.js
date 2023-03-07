function checkUserRole(req, res, next) {
  const userRoles = req.user.role;

  // Перевірка, чи має користувач доступну роль в масиві ролей
  if (
    userRoles.includes("m1a1") ||
    userRoles.includes("m1a2") ||
    userRoles.includes("m1a3")
  ) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}
