import UserTestimonials from "../model/userTestimonial.model.js";

const getAllTestimonials = async (req, res) => {
    try {
        UserTestimonials.find({}, { '_id': 0, '__v': 0 })
            .sort({ id: 1 })
            .sort({ lorem: -1 })
            .then((data) => {
                if (!data) {
                    return res.status(400).send({ status: "failed!", message: `No testimonials found! We will update soon.` })
                }
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).send(err));
    } catch (error) {
        res.status(400).send({
            status: "failed!",
            messgae: error.message,
            error
        });
    }
}

export default getAllTestimonials;