const mailer = require("../services/mailer");

class ContactController {
  static post = (req, res) => {
    const { name, surname, phone, email, message } = req.body;

    const mailOptions = {
      from: email,
      subject: "New message from contact form",
      text: `${message} \n\n Phone: ${phone} \n\n Name: ${name} \n\n Surname: ${surname} \n\n Email: ${email}`,
      html: `<p>${message}</p> <p>Phone: ${phone}</p> <p>Name: ${name}</p> <p>Surname: ${surname}</p> <p>Email: ${email}</p>`,
    };

    mailer
      .send(mailOptions)
      .then(() => {
        res.status(200).send("Message sent");
      })
      .catch((err) => {
        console.warn(err);
        res.status(500).send("Something went wrong");
      });
  };
}

module.exports = ContactController;
