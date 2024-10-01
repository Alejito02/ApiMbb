const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptop');


router.post('/', laptopController.createLaptop);


router.put('/:id', laptopController.updateLaptop);


router.get('/', laptopController.getLaptops);


router.get('/:id', laptopController.getLaptopById);


router.put('/activate/:id', laptopController.activateLaptop);


router.put('/unactivate/:id', laptopController.deactivateLaptop);

module.exports = router;
