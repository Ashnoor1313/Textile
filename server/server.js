const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const inquiryRoutes = require('./routes/inquiryRoutes');

// Load environment configurations
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy for rate-limiting behind reverse proxies (Render, Heroku, Cloudflare, etc.)
app.set('trust proxy', 1);

// Configure helmet for security headers with CSP for Google Fonts and dynamic assets
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      "font-src": ["'self'", "https://fonts.gstatic.com"],
      "img-src": ["'self'", "data:", "https:"],
      "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      "connect-src": ["'self'", "https:", "http://localhost:*", "ws://localhost:*"]
    }
  }
}));

// Enable Gzip compression to optimize asset loading speeds
app.use(compression());

// Configure CORS (Allow requests from client origin)
const allowedOrigin = process.env.CLIENT_URL;
app.use(cors({
  origin: allowedOrigin ? allowedOrigin : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configure body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Anti-spam Rate Limiter (Max 15 requests per 15 minutes per IP address)
const rfqlimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 15, 
  message: {
    success: false,
    message: 'Too many RFQ requests submitted from this IP. Please wait 15 minutes before submitting again.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Bind API Routes
app.use('/api/inquiries', rfqlimiter, inquiryRoutes);

// Health check status route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    status: 'Healthy', 
    timestamp: new Date().toISOString() 
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

// Global Centered Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: 'An unexpected exception occurred on the B2B mock server.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Bind listener port
app.listen(PORT, () => {
  console.log('==================================================');
  console.log(`TEXTILIA B2B API SERVER RUNNING ON PORT ${PORT}`);
  console.log(`Development endpoint: http://localhost:${PORT}/api`);
  console.log('==================================================');
});
