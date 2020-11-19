function email(data){
    var nodemailer = require('nodemailer')

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sanditommy321@gmail.com',
            pass: 'SandiTommy321'
        }
    });


    var mailOptions = {
        from: 'sanditommy321@gmail.com',
        to: data,
        subject: 'hallo from javascript',
        text: `test sending email`
    };

    return transporter.sendMail(mailOptions, function(error,info) {
        if(error){
            console.log(error);
        } else {
            console.log('email sent!' + info.response);
        }
    });
}

module.exports = email