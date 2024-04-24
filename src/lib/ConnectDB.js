import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * @type {import("mongodb").Db}
 */
let db;

const ConnectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.MONGODB_URI;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db  = client.db('car_doctor_db');
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

export default ConnectDB;
