import mongoose from 'mongoose';
import grid from 'gridfs-stream';

let gfs;
const conn = mongoose.connection;
conn.once('open', function () {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
})

// readstream sometime not working with updates express version
//  solution:-  install express 5.13.7 version
//  command :-  npm i express@5.13.7

const showFile = async(req,res) => {
    try {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file) {
                return res.status(404).json({ status: "failed", message: "No file Found!" });
            }
            if (err) { 
                console.log("err >>", err); 
                return res.status(400).send(err);
            }
            console.log("file data : ",file);

            // install 5.13.11 version to use -> gridfs-stream "createReadStream" function;
            gfs.createReadStream({ filename: file.filename }).pipe(res);
        })
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch", error });
    }
}

export default showFile;