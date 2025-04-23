// src/components/CodeEditor.jsx
import React from "react";

const CodeEditor = ({ code, onCodeChange }) => {
  return (
    <div>
      <h3>Code Input</h3>
      <textarea
        rows="15"
        cols="100"
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        placeholder="Paste your Phaser.js code here..."
        style={{ fontFamily: "monospace", width: "100%", padding: "1rem" }}
      />
    </div>
  );
};

export default CodeEditor;
