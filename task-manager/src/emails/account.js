const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nv89@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Wellcome to Task App, ${name}. Let me know how you along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nv89@hotmail.com',
        subject: 'We\'re sorry you\'re leaving!',
        text: `Good by ${name}. Let us know if there is something we can do to keep you at Task App`
    })
}

module.exports = { sendWellcomeEmail, sendCancelationEmail }