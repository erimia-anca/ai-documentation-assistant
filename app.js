require("dotenv").config();
//server configuration
const express = require("express");
const path = require("path");


const { loadDoc } = require("./docs");
const { askAI } = require("./ai");

const app = express();
const PORT = 3000;

//documentation is read
const documentation = loadDoc();

//receiving json
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//sending main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

//endpoint
app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;
        const answer = await askAI(documentation, question);
        res.json({
            answer: answer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong."
        });
    }
});

//this is the starting point
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});