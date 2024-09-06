import mongoose from "mongoose";

export function createConnection() {
 
  try {
    mongoose.connect(process.env.Mongourl);
    console.log("mongodb Connected");
  } catch (error) {
    console.log("Error occured during connection");
  }
}
