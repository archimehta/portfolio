// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Allow requests from different origins (CORS)

// POST route to handle contact form submission
app.post('/api/contact', async (req, res) => {
    console.log('Received contact form submission:', req.body);
    const { firstName, lastName, email, phone, message } = req.body;

    // Validate form fields
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    // Email options
    const mailOptions = {
        from: email, // Sender's email
        to: process.env.EMAIL_USER, // Your email where you'll receive the message
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `You have a new message from:
        \nName: ${firstName} ${lastName}
        \nEmail: ${email}
        \nPhone: ${phone || "N/A"}
        \nMessage: ${message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message, please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
