const express = require('express');
const cookieParser = require('cookie-parser'); // ✅ required
const { connectToDB } = require('./config/data');
const { appRouter } = require('./routes/auth');
const { userRouter } = require('./routes/user');
const { userAuth } = require('./middleware/userAuth');
const cors= require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser()); // ✅ Parse cookies
app.use(cors()); // ✅ Enable CORS
// Public routes
app.use('/auth', appRouter);

// Protected routes
app.use('/user', userAuth, userRouter);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Connect to MongoDB
connectToDB()
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));
