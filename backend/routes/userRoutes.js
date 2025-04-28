const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById,  } = require("../controllers/userController");

const router = express.Router();

// User management Routes
router.get('/', protect, adminOnly, getUsers);
router.get('/:id', protect, getUserById);

module.exports = router;
