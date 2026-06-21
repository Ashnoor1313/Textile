const fs = require('fs').promises;
const path = require('path');
const { sendInquiryEmails } = require('../services/emailService');

const dbPath = path.join(__dirname, '../data/inquiries.json');

// Handles new RFQ inquiries
const createInquiry = async (req, res) => {
  try {
    const { name, company, country, email, phone, productInterest, quantityRequired, message } = req.body;

    // Server-side validation
    if (!name || !company || !country || !email || !productInterest || !quantityRequired || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All mandatory B2B trade fields (name, company, country, email, productInterest, quantityRequired, message) must be completed.' 
      });
    }

    // Verify quantity formatting
    const parsedQty = parseInt(quantityRequired, 10);
    if (isNaN(parsedQty) || parsedQty < 1) {
      return res.status(400).json({ 
        success: false, 
        message: 'Quantity required must be a positive integer.' 
      });
    }

    const newInquiry = {
      id: Date.now().toString(),
      name,
      company,
      country,
      email,
      phone: phone || '',
      productInterest,
      quantityRequired: parsedQty,
      message,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    // Read current database state
    let inquiries = [];
    try {
      const data = await fs.readFile(dbPath, 'utf8');
      inquiries = JSON.parse(data);
    } catch (readError) {
      // If file doesn't exist, create it as empty array
      console.log('Database file empty or missing, initializing...', readError);
      inquiries = [];
    }

    // Append and save record
    inquiries.push(newInquiry);
    await fs.writeFile(dbPath, JSON.stringify(inquiries, null, 2), 'utf8');

    // Trigger Nodemailer dispatch (asynchronous, doesn't block server response)
    sendInquiryEmails(newInquiry);

    return res.status(201).json({
      success: true,
      message: 'RFQ inquiry logged successfully.',
      data: newInquiry
    });

  } catch (error) {
    console.error('Inquiry creation exception:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server exception logging the RFQ.', 
      error: error.message 
    });
  }
};

// Returns logged inquiries (admin access)
const getInquiries = async (req, res) => {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const inquiries = JSON.parse(data);
    
    return res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to retrieve inquiry database records.', 
      error: error.message 
    });
  }
};

module.exports = { createInquiry, getInquiries };
