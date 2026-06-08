// server.js
const express = require ('express');
const path = require('path');
const characters = require ('./data/characters');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. Get all characters for the main list page
app.get('/api/characters', (req, res) => {
    res.json(characters);
})

// 3. Get one character by ID for the detailed page
app.get('/api/characters/:id', (req, res) => {
    const characterId = req.params.id;
    const character = characters.find(c => c.id === characterId);

    if (character) {
        res.json(character);
    } else {
        res.status(404).json({ message: "Character not found!" });
    }
});

// Serve the HTML detail page when a user clicks a character link
app.get('/character/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'character.html'));
});

// 4. Fallback 404 Route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`🗡️ MXTX Codex server is running live at http://localhost:${PORT}`);
})