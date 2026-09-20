module.exports = async function (context, req) {
    const name = (req.body && req.body.name) || "Guest";
    const email = (req.body && req.body.email) || "No email";
    const message = (req.body && req.body.message) || "No message";

    context.log(`New contact form: ${name}, ${email}, ${message}`);

    context.res = {
        status: 200,
        body: `Thanks ${name}, we received your message!`
    };
};

