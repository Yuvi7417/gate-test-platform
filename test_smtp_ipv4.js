const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: '142.250.192.109', // Direct IPv4 for smtp.gmail.com
  port: 465,
  secure: true,
  tls: {
    servername: 'smtp.gmail.com' // Verify cert against domain, not IP
  },
  auth: {
    user: 'test',
    pass: 'test'
  }
});
console.log(transporter.options);
