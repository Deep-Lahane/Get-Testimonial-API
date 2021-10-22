import envVars from 'dotenv'
envVars.config();

import express from "express";
const router = express.Router();

import { addTestimonial, showFile, getAllTestimonials, getTestimonialByID  } from '../controllers/index.controllers.js'

router.get('/', getAllTestimonials);

router.get('/:id', getTestimonialByID);

router.get('/avatar/:filename', showFile);

router.get('/audio/:filename', showFile);

// -------------- -------------- -------------- -------------- -------------- -------------- -------------- --------------

import upload from '../utils/upload.js';
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'audio', maxCount: 1 }]);

router.post('/add-testimonial', cpUpload, addTestimonial);


export default router;

