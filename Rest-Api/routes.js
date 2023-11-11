const router = require('express').Router();

const userController = require('./controllers/userController');
const tripController = require('./controllers/tripController');

router.use('/users', userController);
router.use('/trips', tripController);

module.exports = router;