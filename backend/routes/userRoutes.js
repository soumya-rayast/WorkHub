const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById,  } = require("../controllers/userController");

const router = express.Router();

// User management Routes

// Get all users (admin only)
router.get('/', protect, adminOnly, getUsers);
//Get user by ID
router.get('/:id', protect, getUserById);

module.exports = router;