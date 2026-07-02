const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'test',
    pass: 'test'
  },
  // To force IPv4, we can override the dns lookup:
  socket: {
    family: 4
  }
});
console.log(transporter.options);
