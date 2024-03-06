
import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true});

  connection.isConnected = true;
}

export default dbConnect;