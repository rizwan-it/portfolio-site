module.exports = async function (context, req) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    context.log(`New contact form: ${name}, ${email}, ${message}`);

    context.res = {
        status: 200,
        body: `Thanks ${name}, we received your message!`
    };
};
