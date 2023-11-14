const express = require("express");
const mongoose = require('mongoose');
const app = express();



mongoose.connect('mongodb+srv://nodejs_projet:AQuuovw30OTgT9om@cluster0.8xuijmc.mongodb.net/journal', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
    console.log('Connecté à MongoDB Atlas');
});


// Routes
app.use(express.json());
app.use("/api/converter", require("./routes/api/converter"));



// Port d'écoute du serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
