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

// 'useCreateIndex': true   --> to avoid deprecation warning: 
// (node:4232) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// (Use `node --trace-deprecation ...` to show where the warning was created)

export default dbConnection;
