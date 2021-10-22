import UserTestimonials from "../model/userTestimonial.model.js";
import env_vars from 'dotenv';
env_vars.config();

const addTestimonial = async (req, res) => {
    try {
        req.body = JSON.parse(JSON.stringify(req.body));

        const isPresent = await UserTestimonials.findOne({ id: req.body.id });
        if (isPresent !== null || isPresent) return res.status(400).send({ status: "failed", message: "ID already present" });

        console.log(req.body);
        console.log(req.files['avatar'][0]);
        console.log(req.files['audio'][0]);
        console.log("----------------------------------------------------------------------------");

        const avatarFilename = `${process.env.APP_BASE_URL}/api/avatar/${req.files['avatar'][0].filename}`;
        const audioFilename = `${process.env.APP_BASE_URL}/api/audio/${req.files['audio'][0].filename}`;

        console.log("avatar filename:", avatarFilename, "\naudio filename:", audioFilename, "\n");

        const lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.";
        const { id, name, location, designation, message, rating } = req.body;
        let { avatar, audio } = req.body;
        avatar = avatarFilename;
        audio = audioFilename;

        if (!id || !name || !location || !designation || !message || !rating || !lorem || !avatar || !audio) {
            console.log({ status: "failed!", message: "All required filed not present" });
            return res.status(400).send({ status: "failed!", message: "All required fileds are not present" });
        }

        // console.log("provided api_key :", req.query.api_key);

        if (process.env.API_KEY !== req.query.api_key) {
            return res.status(400).send({
                status: "failed",
                message: "Must provide 'api_key' in query to add Testimonial."
            })
        }

        const newUserTestimonial = new UserTestimonials({
            id, name, location, designation, message, rating, lorem, avatar, audio
        })
        await newUserTestimonial.save();

        res.status(200).send({
            status: "success",
            messgae: "new user-testimonial added successfully.",
            newUserTestimonial
        });
    } catch (error) {
        res.status(400).send({
            status: "failed!",
            messgae: error.message,
            error
        });
    }
}

export default addTestimonial;