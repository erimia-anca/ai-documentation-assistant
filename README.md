## ✦AI Documentation Assistant
This project was created as a learning project. I used AI as a learning and development tool to help me understand concepts, explore solutions, debug issues, and improve my code. The project was built to practice working with APIs, documentation processing, backend development, and AI integration.

### ✦About the project
AI Documentation Assistant is an AI-powered application that allows users to ask questions about a project's documentation and receive answers based on the available documentation files, in this case README.md and INSTALL.md.

The application reads documentation files from a folder, sends the relevant documentation together with the user's question to Google's Gemini API, and displays the AI-generated response in a chat interface.

### ✦Technologies
  ♡ JavaScript

  ♡ Node.js

  ♡ Express.js

  ♡ HTML
  
  ♡ CSS
  
  ♡ Gemini API
  
  ♡ npm

## ✦Features

  ♡ Read documentation files from a project folder
  
  ♡ Send documentation and user questions to Gemini
  
  ♡ Receive AI-generated answers
  
  ♡ Display conversations in a chat interface
  
  ♡ Automatically scroll to the latest message
  
  ♡ Clear the input field after sending a question
  
  ♡ Process JSON responses from the AI API
  
  ♡ Dynamically update the interface with AI-generated responses

## ✦The process

The project started with exploring what APIs are and basic methods to work with them. After gaining a bit of basic knowledge, a basic server was set up alongside with the backend logic.

The application then reads the documentation files from a specific folder. When the user asks a question, the question is sent to the backend, where the documentation is combined with the user's input and sent to the Gemini API.

The AI response is then returned to the frontend, converted from JSON into a JavaScript object, and displayed in the chat box.

The interface was made last, inspierd by ChatGPT, Discord and Slack. It also updates automatically by scrolling to the latest message, making the conversation easier to follow.

## ✦What I learned

Through this project, I learned more about:
  
  ♡ Working with Node.js and Express
  
  ♡ Creating and using API endpoints
  
  ♡ Sending requests to external APIs
  
  ♡ Working with JSON data
  
  ♡ Handling asynchronous operations
  
  ♡ Reading files from the filesystem
  
  ♡ Connecting a web application to an AI API
  
  ♡ Building a basic chat interface
  
  ♡ Debugging backend and frontend communication
  
  ♡ Structuring a small full-stack application

## ✦Possible improvements
  ♡ Conversation history
  
  ♡ Better error handling
  
  ♡ A more advanced user interface that mixes more the platforms that inspierd the look of the project
  
  ♡ The possibility to send the message to the chat by pressing the button 'Enter'

## ✦Future improvements

In the future, I would like to improve the project by making the documentation processing more efficient and by adding better context management. I also plan to change the documentation from project-related information to information about hamster health, helping people who are concerned about their hamsters find reliable information based on verified documentation.



