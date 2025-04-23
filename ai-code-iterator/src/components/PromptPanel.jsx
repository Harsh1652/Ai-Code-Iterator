// src/components/PromptPanel.jsx
import React from "react";

const PromptPanel = ({ prompt, onPromptChange, onSubmit }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>What would you like to improve or change?</h3>
      <input
        type="text"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="e.g., optimize performance or add jump animation"
        style={{ width: "80%", padding: "0.5rem" }}
      />
      <button onClick={onSubmit} style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Apply Suggestion
      </button>
    </div>
  );
};

export default PromptPanel;
