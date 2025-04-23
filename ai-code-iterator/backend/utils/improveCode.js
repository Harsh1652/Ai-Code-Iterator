const { Configuration, OpenAIApi } = require("openai");

// Log the API key presence (but not the actual key)
console.log("API Key available in improveCode:", process.env.OPENAI_API_KEY ? "Yes" : "No");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function improveCode(code, prompt) {
  if (!code || !prompt) {
    throw new Error("Code and prompt are required.");
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key is not configured in environment variables.");
  }

  const fullPrompt = `Improve the following Phaser.js game code based on this instruction: "${prompt}". Be specific and include code enhancements. Return only the updated full code.\n\nOriginal Code:\n${code}`;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // Changed from gpt-4 to gpt-3.5-turbo
      messages: [{ role: "user", content: fullPrompt }],
      temperature: 0.7,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { improveCode };
