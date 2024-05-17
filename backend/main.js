const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const userRouter = require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


mongoose.connect('mongodb://localhost:27017/NodeReactTemplate').then(() => {
    console.log('Connected to MongoDB');
});


app.use('/user', userRouter);