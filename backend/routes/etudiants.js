const express = require("express");
const Etudiant = require("../models/Etudiants");

const router = express.Router();

// Ajouter un étudiant
router.post("/", async (req, res) => {
  try {
    const etudiant = new Etudiant(req.body);
    await etudiant.save();
    res.status(201).json(etudiant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Récupérer tous les étudiants
router.get("/", async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
