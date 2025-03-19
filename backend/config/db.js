const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://mongodb+srv://paulphilippe:1234567890@render.gaco9.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
