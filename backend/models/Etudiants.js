const mongoose = require("mongoose");

const EtudiantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  classe: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
});

module.exports = mongoose.model("Etudiant", EtudiantSchema);
