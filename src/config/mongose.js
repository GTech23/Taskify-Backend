import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected`);
  } catch (e) {
    console.error(`DB Connection Error: ${e.message}`);
  }
};

export default db;
