var nodemailer = require('nodemailer');

exports.initMailer = function(mailer_service, mailer_login, mailer_pwd){
	return nodemailer.createTransport({
	 service: mailer_service,
	 auth: {
			user: mailer_login,
			pass: mailer_pwd
		}
	});
}

exports.sendMail = function(transporter, email_from, email_to, mail_subject, html_code) {	
	const mailOptions = {
	  from: email_from,
	  to: email_to,
	  subject: mail_subject,
	  html: html_code
	};
	transporter.sendMail(mailOptions, function (err, info) {
	   if(err)
			console.log(err)
	   else
			console.log(info);
	});
} 


