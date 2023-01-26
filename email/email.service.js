const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, META_MAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendSgEmail(data) {
  const message = {
    ...data,
    from: META_MAIL,
  };

  await sgMail.send(message);
}

module.exports = sendSgEmail;

// async function sendSgEmail
// const message = {
//   to: email,
//   subject: "Email verification",
//   html: `<a href="${BASE_URL}/api/users/verify/${result.verificationToken}">Click to verify your email</a>`,
// };

// await sendSgEmail(message);
