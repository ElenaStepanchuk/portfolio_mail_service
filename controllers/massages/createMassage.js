const { Massage } = require("../../models");
const { sendEmail } = require("../../helpers/sendEmail");

const createMassage = async (req, res) => {
  // const { name, email, subject, message } = req.body;
  // const data = { to: email, subject, html: message, name };
  sendEmail();
  const massage = await Massage.create(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: { massage },
  });
};
module.exports = createMassage;
