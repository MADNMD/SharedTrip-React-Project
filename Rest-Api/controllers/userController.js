const router = require('express').Router();

const userServices = require('../services/userServices');

const { COOKIE_SESION_NAME } = require('../constants');
const { getErrorMessage } = require('../utils/errorHellper');

router.post('/register', async (req, res) => {

    try {

        const { firstname, lastname, username, email, profilePicture, telefon, password } = req.body;
        const user = await userServices.register(firstname, lastname, username, email, profilePicture, telefon, password);
        const token = await userServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.json({
            authToken: token,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            telefon: user.telefon,
            password: user.password,
            _id: user._id
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await userServices.login(email, password);
        const token = await userServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.json({
            authToken: token,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            telefon: user.telefon,
            password: user.password,
            _id: user._id
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.get('/user', async (req, res) => {

    try {

        const userId = req.user._id;

        const user = await userServices.getUser(userId);

        res.json({
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            telefon: user.telefon,
            password: user.password,
            _id: user._id
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/edit/:userId', async (req, res) => {

    try {

        const userId = req.user._id;
        const { firstname, lastname, username, email, profilePicture, telefon } = req.body;

        const updateUserData = { firstname, lastname, username, email, profilePicture, telefon };

        const editUser = await userServices.editUser(userId, updateUserData);

        res.status(200).json(editUser);
    } catch (error) {
        res.status(400).json({
            message: getErrorMessage(error)
        });
    }
});

router.delete('/delete/:userId', async (req, res) => {

    try {

        const userId = req.user._id;

        await userServices.deleteUser(userId);

        res.clearCookie(COOKIE_SESION_NAME);
        res.status(200).end();
    } catch (error) {
        res.status(400).json({
            message: getErrorMessage(error)
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_SESION_NAME);
    res.json({});
    res.status(200);
});

module.exports = router;