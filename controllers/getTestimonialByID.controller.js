import UserTestimonials from "../model/userTestimonial.model.js";

const getTestimonialByID = async (req,res) =>{
    try {
        const id = Number(req.params.id);
        UserTestimonials.findOne({ id }, { '_id': 0, '__v': 0 })
            .then((data) => {
                if (!data) {
                    return res.status(400).send({ status: "failed!", message: `user testimonial with id=${id} not found.` })
                }
                res.status(200).json(data);
            })
            .catch((err) => {
                if (err.name === "CastError") return res.status(400).send({ status: "failed!", messgae: "Provide number instead of string." });
                res.status(400).send({ status: "failed!", messgae: err.message, err });
            });
    } catch (error) {
        res.status(400).send({ status: "failed!", messgae: error.message, error });
    }
}

export default getTestimonialByID;