const { Schema, model } = require("mongoose");

const regEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const massageSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      unique: true,
      match: regEmail,
    },
    subject: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 200,
    },
    message: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 500,
    },
  },
  { versionKey: false, timestamps: true }
);

const Massage = model("massage", massageSchema);

module.exports = Massage;
