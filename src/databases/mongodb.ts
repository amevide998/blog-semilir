// dbConnection.ts
import mongoose, { connect } from 'mongoose';

export async function connectToDatabase() {
    const uri = process.env.MONGODB_URI as string
    if(mongoose.connections[0].readyState){
        console.log('Use existing connection')
        return;
    }
    await connect(uri);
    console.log('Connected to MongoDB');
}
