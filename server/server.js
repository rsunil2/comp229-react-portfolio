import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express from 'express'; // ES6 and newer javascript

import authMiddleware from './middlewares/auth.js';

import projectsRoutes from './routes/projects-routes.js';
import userRoutes from './routes/user-routes.js';


// Establish DB Connection
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection; 
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

const app = express(); 

app.use(express.json()); // for parsing application/json

// Backend welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to My Portfolio application."
    });
});

app.use('/projects', authMiddleware, projectsRoutes);
app.use('/users', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});