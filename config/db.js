import { connect } from 'mongoose';
import colrs from 'colors';
 const connectDB = async ()=>{
    try {
        const conn = await connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
