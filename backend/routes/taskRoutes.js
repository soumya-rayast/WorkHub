const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { getUserDashboardData, getDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist } = require('../controllers/taskController');

const router = express.Router();

// Task Management Routes
//Dashboard Routes 
router.get('/dashboard-data', protect, getDashboardData); // if admin-only
router.get('/user-dashboard-data', protect, getUserDashboardData);

// Task CRUD
router.get('/', protect, getTasks);
router.get('/:id', protect, getTaskById);
router.post('/', protect, adminOnly, createTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, adminOnly, deleteTask);

// Task Status & Checklist
router.put('/:id/status', protect, updateTaskStatus);
router.put("/:id/todo", protect, updateTaskChecklist)

module.exports = router;
