exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    const name = data.name;
    const email = data.email;
    const message = data.message;

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