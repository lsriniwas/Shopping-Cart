const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Data successfully connected");

  } catch {
    console.log("Error connecting the database",err);
    process.exit(1)
  }
};


module.exports=connectToDB;