const postUser = require("../../controllers/user/postUser");
const { user } = require("../../db");
const nodemailer = require("nodemailer");

const postUserHandler = async (req, res) => {
  try {
    const {
      name,
      email,
      lastname,
      birthdate,
      password,
      phone,
      username,
      gender,
      profilePicture,
    } = req.body;

    if (!name | !email | !lastname | !birthdate | !password | !username) {
      return res.status(206).send("Missing information");
    }
    const userFound = await user.findOne({ where: { email } });
    if (!userFound) {
      const newUser = await postUser(
        name,
        email,
        lastname,
        birthdate,
        password,
        phone,
        username,
        gender,
        profilePicture
      );
      if (newUser) {
        // Código para enviar el correo está comentado
        // Descomenta y configura el código de nodemailer si es necesario
        // const transporter = nodemailer.createTransport({
        //   service: "gmail",
        //   auth: {
        //     user: "becomfreee@gmail.com",
        //     pass: "aczt jwha iyfg wotr",
        //   },
        // });
        //
        // transporter.sendMail({
        //   from: "<becomfreee@gmail.com>",
        //   to: email,
        //   subject: `Welcome ${name}`,
        //   text: "Welcome to BeComfree, enjoy!",
        // });

        return res.status(200).send("User created successfully");
      }
    }
    return res.send("User already exists");
  } catch (error) {
    console.log("Error creating user", error);
    return res.status(400).json({ message: `error: ${error.message}` });
  }
};

module.exports = postUserHandler;
