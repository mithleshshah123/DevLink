const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not Valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("EmaiId is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  }
};

const validateEditField = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "gender",
    "age",
    "skills",
    "about",
    "photoUrl",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = { validateSignUpData, validateEditField };
