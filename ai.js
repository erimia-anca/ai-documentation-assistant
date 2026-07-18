
require("dotenv").config();
const{ GoogleGenAI } = require("@google/genai");
//here i initialize the api key
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

//send the documentation to gemini
async function askAI(documentation, question){
    const prompt = `
    You are an AI Documentation Assistant.

    Documentation:
    ${documentation}

    Question:
    ${question}
    `;


    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });
    //returns gemini's response to the user
    return response.text;
}

module.exports = {
    askAI
};