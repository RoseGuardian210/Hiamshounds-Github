// require('dotenv').config();

// const express = require('express');
// const bodyParser = require('body-parser');
// const sgMail = require('@sendgrid/mail');

// const app = express();
// const port = process.env.PORT || 3000;

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public')); // where your Enquiries.html lives

// // POST route for regular form submission (HTML email)
// app.post('/submit', (req, res) => {
//   const data = req.body;

//   const htmlContent = `
//     <h2>New Puppy Enquiry</h2>
//     <p><strong>Full Name:</strong> ${data.fullName}</p>
//     <p><strong>Email:</strong> ${data.email}</p>
//     <p><strong>Phone:</strong> ${data.phone}</p>
//     <p><strong>Children:</strong> ${data.family}</p>
//     <p><strong>I am enquiring for:</strong> ${data.interest}</p>
//     <p><strong>Breed Interested:</strong> ${data.breed}</p>
//     <p><strong>Gender Preference:</strong> ${data.gender}</p>
//     <p><strong>Puppy specifications:</strong> ${data.specific}</p>
//     <p><strong>Living Conditions:</strong> ${data.living}</p>
//     <p><strong>Pets We Own:</strong> ${data.pets}</p>
//     <p><strong>Owned This Breed Before:</strong> ${data.ownBreed}</p>
//     <p><strong>Researched Breed:</strong> ${data.research}</p>
//     <p><strong>Time Puppy Will Be Left Alone:</strong> ${data.alone}</p>
//     <p><strong>How They Found Us:</strong> ${data.findUs}</p>
//     <p><strong>Extra information about ${data.fullName}:</strong> ${data.extraInfo}</p>
//   `;

//   const msg = {
//     to: 'hiamshounds@gmail.com',
//     from: 'hiamshounds@gmail.com', // must be verified in SendGrid
//     subject: 'New Puppy Enquiry Submission',
//     html: htmlContent
//   };

//   sgMail
//     .send(msg)
//     .then(() => res.json({ success: true }))
//     .catch((err) => {
//       console.error('SendGrid error:', err.response?.body || err.message);
//       res.status(500).send('❌ There was a problem sending your form.');
//     });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


require('dotenv').config(); // Load .env file

const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the SendGrid API Key from the .env file
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Handle POST from the form
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Form Data:', data); // ✅ Add this to debug
  const interest = data.interest || 'Not specified';

  // Determine breed and puppy choice based on interest
  let breed = '';
  let puppyChoice = '';
  let gender = '';
  let specific = '';

  if (interest === 'Current Litter') {
    breed = data['puppy-breed'];
    if (breed === 'German Shepherd') {
      puppyChoice = data.whichPuppyGer;
    } else if (breed === 'Miniature Schnauzer') {
      puppyChoice = data.whichPuppySCH;
    }
  } else if (interest === 'Upcoming Litter') {
  breed = data['breed-upcoming'];
  if (breed === 'German Shepherd') {
    puppyChoice = data['litterShep-upcoming'];
    gender = data['gender-upcomingGER'];
    specific = data['specificGER'];
  } else if (breed === 'Miniature Schnauzer') {
    puppyChoice = data['litterSCH-upcoming'];
    gender = data['genderSCH'];
    specific = data['specificSCH'];
  }
  } else if (interest === 'Waiting List') {
    breed = data['breed-waiting'];
    puppyChoice = 'Waiting List Registration';
    gender = data['gender-waiting'];
    specific = data['specific-waitingTime'];
  }

  const htmlContent = `
    <h2>New Puppy Enquiry</h2>
    <p><strong>Full Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Children:</strong> ${data.family}</p>
    <p><strong>I am enquiring for:</strong> ${interest}</p>
    <p><strong>Breed Interested:</strong> ${breed || 'Not specified'}</p>
    <p><strong>Puppy Choice:</strong> ${puppyChoice || 'Not specified'}</p>
    <p><strong>Gender Preference:</strong> ${gender || 'Not specified'}</p>
    <p><strong>Specific traits / notes:</strong> ${specific || 'None'}</p>
    <p><strong>Living Conditions:</strong> ${data.living}</p>
    <p><strong>Current Pets:</strong> ${data.pets}</p>
    <p><strong>Owned This Breed Before:</strong> ${data.ownBreed}</p>
    <p><strong>Researched This Breed:</strong> ${data.research}</p>
    <p><strong>Time Puppy Left Alone:</strong> ${data.alone}</p>
    <p><strong>How They Found Us:</strong> ${data.findUs}</p>
    <p><strong>Extra Info:</strong> ${data.extraInfo || 'N/A'}</p>
  `;

  const msg = {
    to: 'hiamshounds@gmail.com',
    from: 'hiamshounds@gmail.com',
    subject: 'New Puppy Enquiry Submission',
    html: htmlContent,
  };

  sgMail
    .send(msg)
    .then(() => res.json({ success: true }))
    .catch((err) => {
      console.error('SendGrid error:', err.response?.body || err.message);
      res.status(500).send('❌ There was a problem sending your form.');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
