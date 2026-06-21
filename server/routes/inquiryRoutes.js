const express = require('express');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

const router = express.Router();

// Route: POST /api/inquiries (leads capture)
router.post('/', createInquiry);

// Route: GET /api/inquiries (leads audit log)
router.get('/', getInquiries);

module.exports = router;
