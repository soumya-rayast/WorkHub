const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { exportTasksReport, exportUsersReport } = require('../controllers/reportController');

const router = express.Router();

//Export all tasks as Excel
router.get('/export/tasks', protect, adminOnly, exportTasksReport);
//Export user-task report as Excel
router.get('/export/users', protect, adminOnly, exportUsersReport);

module.exports = router;