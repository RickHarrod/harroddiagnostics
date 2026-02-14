const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    const name = data.name;
    const email = data.email;
    const message = data.message;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};