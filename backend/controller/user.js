const UserModel = require('../models/user');
async function getUser(req, res) {
    try {
        const user = await UserModel.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function addUser(req, res) {
    console.log(req.body);
    const user = new UserModel({
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteUser(req, res) {
    const email = req.body.Email;
    console.log(email);
    try {
        await UserModel.deleteOne({email: email});
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getUser, addUser, deleteUser
};