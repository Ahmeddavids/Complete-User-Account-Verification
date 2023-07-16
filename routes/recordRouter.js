const express = require('express');

const router = express.Router();
const recordController = require('../controllers/recordController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/records', authMiddleware.userAuth, recordController.createRecord);

router.get('/all-records', recordController.getRecords);

router.get('/user-records', authMiddleware.userAuth, recordController.getRecords);

router.get('/user-records/:id', authMiddleware.userAuth, recordController.getRecord);

router.patch('/user-records/:id', authMiddleware.userAuth, recordController.updateRecord);

router.delete('/user-records/:id', authMiddleware.userAuth, recordController.deleteRecord);




module.exports = router