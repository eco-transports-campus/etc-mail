var mailer = require('./index.js');

var transporter = mailer.initMailer('gmail', 'eco.transport.campus@gmail.com', 'APP52018');
mailer.sendMail(transporter, 'eco.transport.campus@gmail.com', 'prenom.nom@u-psud.fr', 'Random subject', 'Hola chico');
