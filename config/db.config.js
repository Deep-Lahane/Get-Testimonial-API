import mongoose from "mongoose";
import env_vars from "dotenv";
env_vars.config();

const dbConnection = () => {
    mongoose
        .connect(process.env.CONN_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log("Mongoose Connected"))
        .catch((error) =>
            console.log("Error in mongoose Connection : \n", error)
        );
}
export default dbConnection;