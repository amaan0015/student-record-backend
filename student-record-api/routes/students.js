const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentController');

router.get('/', ctrl.getAllStudents);
router.post('/', ctrl.createStudent);
router.put('/:id', ctrl.updateStudent);
router.delete('/:id', ctrl.deleteStudent);

module.exports = router;
