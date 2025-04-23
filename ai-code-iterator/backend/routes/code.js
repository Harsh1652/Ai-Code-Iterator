const express = require("express");
const router = express.Router();
const { improveCode } = require("../utils/improveCode");

router.post("/iterate", async (req, res) => {
  const { code, prompt } = req.body;

  if (!code || !prompt) {
    return res.status(400).json({ error: "Both code and prompt are required." });
  }

  try {
    const modifiedCode = await improveCode(code, prompt);
    res.json({ modifiedCode });
  } catch (err) {
    console.error("Error in improveCode:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Error generating modified code." });
  }
});

module.exports = router;
