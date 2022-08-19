var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hadtnt71@gmail.com',
    pass: 'pmcpcegngfxmtetm',
  },
});
var mailOptions = {
  from: 'hadtnt71@gmail.com',
  to: 'hadtnt73@gmail.com',
  subject: 'Sending email using nodejs',
  text: ' That was easy',
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log('err', err);
  } else {
    console.log('info', info);
  }
});
