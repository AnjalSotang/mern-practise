const mongoose = require('mongoose');

//We have to ways to program i.e. functional based approach or
//OOP based Approach is used professionally
// Descriptive approach should be use to declare a name of a functions
async function connectToDatabase() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );
    console.log("✅ MongoDB Connected Using Mongoose");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
  }
}



module.exports = connectToDatabase;
  

