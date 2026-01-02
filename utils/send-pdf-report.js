require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');

const pdfPath = path.join(__dirname, '../Playwright_Test_Report.pdf');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

(async () => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: 'Playwright Automation Test Report (PDF)',
    text: 'Attached is the Playwright HTML report converted to PDF.',
    attachments: [{ path: pdfPath }]
  });

  console.log('PDF report emailed successfully');
})();

