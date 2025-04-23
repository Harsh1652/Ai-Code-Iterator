// Load environment variables first
const path = require('path');
const dotenv = require('dotenv');

// Configure dotenv with explicit path
const result = dotenv.config({ path: path.resolve(__dirname, '.env') });
if (result.error) {
  console.error("Error loading .env file:", result.error);
}

// Debug logging
console.log("API Key loaded:", process.env.OPENAI_API_KEY ? "✓ Yes" : "✗ No");
if (process.env.OPENAI_API_KEY) {
  // Only log first few characters for security
  console.log("API Key starts with:", process.env.OPENAI_API_KEY.substring(0, 5) + "...");
}

// Import other modules after environment variables are loaded
const express = require("express");
const cors = require("cors");
const codeRoutes = require("./routes/code");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/code", codeRoutes);

// Global error handler (optional but nice)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal server error." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
