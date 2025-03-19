const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const etudiantRoutes = require("./routes/etudiants");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
connectDB();

// Routes
app.use("/api/etudiants", etudiantRoutes);

// Route d'accueil pour éviter l'erreur 404 sur "/"
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API des étudiants !");
});

// Gestion des routes inconnues (404)
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
