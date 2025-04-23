# Ai-Code-Iterator
An interactive tool that uses AI to improve and iterate on Phaser.js game code. This application allows developers to input their Phaser.js code, describe desired improvements, and receive AI-enhanced code suggestions.

    <img alt="AI Code Iterator" src="https://via.placeholder.com/800x400?text=AI+Code+Iterator">


### Features
    
  1. Interactive code editor for Phaser.js code input
    
  2. Prompt-based code improvement suggestions
    
  3. Real-time code enhancement using OpenAI's API
    
  4. Clean, user-friendly interface
    
  5. Supports various code improvement requests (optimization, features, refactoring)


### Perequisites

1. Node.js (v14 or later)
2. npm (v6 or later)
3. OpenAI API key

### Installation
    
  Clone the repository
  	
     git clone https://github.com/yourusername/ai-code-iterator.git
     cd ai-code-iterator


### Frontend Setup

  Install frontend dependencies
    
    npm install
 Start the React development server
    
    npm start

### Backend Setup

  Navigate to the backend directory
    
    cd backend

  Install backend dependencies
    
    npm install

##### Create a .env file with your OpenAI API key
    echo "OPENAI_API_KEY=your_openai_api_key" > .env

# Start the backend server
    npm run dev

### Usage
1. Open your browser and navigate to http://localhost:3000
2.	Paste your Phaser.js code into the Code Input section
3.	Enter an improvement prompt (e.g., "optimize collision detection" or "add player animation")
4.	Click "Apply Suggestion"
5.	Review the improved code in the Modified Code section
6.	Copy the result or continue iterating with new prompts


### Project Structure
    	ai-code-iterator/
    ├── backend/                  # Express server
    │   ├── routes/               # API routes
    │   │   └── code.js           # Code iteration endpoint
    │   ├── utils/                
    │   │   └── improveCode.js    # OpenAI integration
    │   ├── .env                  # Environment variables
    │   ├── package.json          # Backend dependencies
    │   └── server.js             # Express server setup
    ├── public/                   # Static assets
    ├── src/                      # React application
    │   ├── components/           
    │   │   ├── CodeEditor.jsx    # Code input component
    │   │   └── PromptPanel.jsx   # Prompt input and submit
    │   ├── App.js                # Main application component
    │   └── index.js              # Entry point
    └── package.json              # Frontend dependencies



### Technologies
 1. Frontend: React, CSS
 2. Backend: Node.js, Express
 3. AI: OpenAI API (GPT-3.5 Turbo)
 4. Others: dotenv, cors
    
### Running in Development Mode
 1. Start the backend server: cd backend && npm run dev
 2. In a separate terminal, start the frontend: npm start
 3. Access the application at http://localhost:3000


### Security Notes
 1. Keep your OpenAI API key secure and never commit it to public repositories
 2. The sample .env file in this repository contains a placeholder API key



