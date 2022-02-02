import express from 'express';
import cors from 'cors';
import env_vars from 'dotenv';
env_vars.config();
import dbConnection from './config/db.config.js';
import router from './router/routes.js';

const app = express();
dbConnection();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'))

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    try {
        res.status(200).render('pages/index')
    } catch (error) {
        res.status(400).send({ status: "failed", message: error.message, error });
    }
})

//protected page
app.get('/add-testimonial', (req, res) => {
    try {
        const api_key = req.query.api_key;
        if (!api_key) return res.status(400).send({ status: "failed", message: "Access Denied! Provide 'api_key' as query" });
        if (api_key !== process.env.API_KEY) return res.status(400).send({ status: "failed", message: "Access Denied! Provide valid 'api_key'" });

        res.status(200).render('pages/add-testimonial');
    } catch (error) {
        res.status(400).send({ status: "failed", message: error.message, error });
    }
})

app.use("/api/", router); //controller

app.get('/*', (req, res) => {
    res.status(404).render('pages/404');
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})