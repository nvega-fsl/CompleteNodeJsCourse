const sgMail = require('@sendgrid/mail')

const apiKey = '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'
sgMail.setApiKey(apiKey)

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