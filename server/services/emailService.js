const nodemailer = require('nodemailer');

const sendInquiryEmails = async (inquiryData) => {
  try {
    let testAccount;
    
    // Check if we need Ethereal fake credentials
    const isEthereal = !process.env.SMTP_USER || process.env.SMTP_USER === 'placeholder';
    if (isEthereal) {
      testAccount = await nodemailer.createTestAccount();
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.SMTP_USER || testAccount.user,
        pass: process.env.SMTP_PASS || testAccount.pass,
      },
    });

    // 1. B2B Client Auto-confirmation Email template (Apple / Luxury aesthetic layout)
    const clientMailOptions = {
      from: `"Textilia Fine Weavers" <trade@textiliaweavers.com>`,
      to: inquiryData.email,
      subject: `RFQ Received - GOTS & ISO Certified Weaving Mills`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e5e7eb; background-color: #fafbfc; color: #1f2937;">
          <div style="border-bottom: 2px solid #d4a373; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #0b0f19; margin: 0; font-family: serif; letter-spacing: 1px;">TEXTILIA FINE WEAVERS</h2>
            <span style="font-size: 9px; color: #d4a373; letter-spacing: 2px; font-weight: bold;">EST. 1984 | PREMIUM EXPORT MILLS</span>
          </div>
          
          <p style="font-size: 14px; line-height: 1.5;">Dear ${inquiryData.name},</p>
          <p style="font-size: 13px; line-height: 1.5; color: #4b5563;">Thank you for submitting your Request for Quote (RFQ) to our export office. We have successfully logged your B2B inquiry in our centralized ERP database.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-left: 4px solid #d4a373; margin: 25px 0; font-size: 13px;">
            <h4 style="margin-top: 0; color: #0b0f19; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Inquiry Ledger:</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; color: #6b7280;">Representative:</td><td style="font-weight: bold; color: #1f2937;">${inquiryData.name}</td></tr>
              <tr><td style="padding: 5px 0; color: #6b7280;">Company Name:</td><td style="font-weight: bold; color: #1f2937;">${inquiryData.company}</td></tr>
              <tr><td style="padding: 5px 0; color: #6b7280;">Target Country:</td><td style="font-weight: bold; color: #1f2937;">${inquiryData.country}</td></tr>
              <tr><td style="padding: 5px 0; color: #6b7280;">Fabric Interest:</td><td style="font-weight: bold; color: #1f2937;">${inquiryData.productInterest}</td></tr>
              <tr><td style="padding: 5px 0; color: #6b7280;">Quantity Required:</td><td style="font-weight: bold; color: #1f2937;">${inquiryData.quantityRequired} Meters</td></tr>
            </table>
          </div>
          
          <p style="font-size: 13px; line-height: 1.5; color: #4b5563;">A designated export sales manager is auditing your specifications and will respond with standard CIF/FOB pricing metrics and sample hanger schedules within 1 business day.</p>
          
          <p style="font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            Textilia Weaving EPZ Plant | Block D, Export Promotion Zone, Uttar Pradesh, India<br/>
            GOTS, OEKO-TEX Standard 100, Global Recycled Standard Certified Mill
          </p>
        </div>
      `
    };

    // 2. Sales Team Alert template
    const salesMailOptions = {
      from: `"ERP Lead Sync" <erp-leads@textiliaweavers.com>`,
      to: process.env.SALES_EMAIL || 'leads@textiliaweavers.com',
      subject: `NEW EXPORT RFQ - ${inquiryData.company} (${inquiryData.country})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #334155; background-color: #0f172a; color: #f8fafc;">
          <h3 style="color: #d4a373; margin-top: 0; font-family: serif;">New B2B Lead Registered</h3>
          <hr style="border-color: #334155;"/>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 15px 0;">
            <tr><td style="padding: 6px 0; color: #94a3b8;">Rep Name:</td><td style="font-weight: bold;">${inquiryData.name}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Company:</td><td style="font-weight: bold;">${inquiryData.company}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Country:</td><td style="font-weight: bold;">${inquiryData.country}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Email Address:</td><td style="font-weight: bold;"><a href="mailto:${inquiryData.email}" style="color: #d4a373;">${inquiryData.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Phone Code:</td><td style="font-weight: bold;">${inquiryData.phone || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Fabric Base:</td><td style="font-weight: bold;">${inquiryData.productInterest}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Target MOQ:</td><td style="font-weight: bold; color: #d4a373;">${inquiryData.quantityRequired} meters</td></tr>
          </table>
          <div style="background: #1e293b; border-left: 4px solid #d4a373; padding: 15px; font-size: 13px; color: #e2e8f0; line-height: 1.5;">
            <strong>Specifications & Comments:</strong><br/>
            <p style="margin-top: 8px; font-style: italic;">${inquiryData.message}</p>
          </div>
          <span style="font-size: 10px; color: #64748b; display: block; margin-top: 20px;">ERP Sync Auto Logger</span>
        </div>
      `
    };

    const clientInfo = await transporter.sendMail(clientMailOptions);
    const salesInfo = await transporter.sendMail(salesMailOptions);

    if (isEthereal) {
      console.log('--------------------------------------------------');
      console.log('ETHEREAL SANDBOX MAILER ACTIVE:');
      console.log('Client auto-confirm URL:', nodemailer.getTestMessageUrl(clientInfo));
      console.log('Sales lead notification URL:', nodemailer.getTestMessageUrl(salesInfo));
      console.log('--------------------------------------------------');
    }

    return { success: true };
  } catch (error) {
    console.error('Email dispatch error:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendInquiryEmails };
