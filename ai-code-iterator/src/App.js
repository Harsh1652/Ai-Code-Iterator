import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import PromptPanel from "./components/PromptPanel";

function App() {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/code/iterate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, prompt }),
      });

      const data = await res.json();
      setResult(data.modifiedCode || "No result");
    } catch (err) {
      console.error("Error:", err);
      setResult("Error processing code.");
    }
  };

  return (
    
    <div style={{ padding: "2rem" }}>
       <h1>Code Iterator AI Tool 🔁</h1>
       <p>Let’s build something magical, one iteration at a time!</p>
      <h1>Phaser.js Code Iterator</h1>
      <CodeEditor code={code} onCodeChange={setCode} />
      <PromptPanel prompt={prompt} onPromptChange={setPrompt} onSubmit={handleSubmit} />
      <div style={{ marginTop: "2rem" }}>
        <h3>Modified Code:</h3>
        <pre style={{ background: "#f4f4f4", padding: "1rem" }}>{result}</pre>
      </div>
    </div>
  );
}

export default App;
