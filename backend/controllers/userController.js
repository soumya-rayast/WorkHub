const Task = require('../models/Task');
const user = require('../models/User');
const bcrypt = require('bcryptjs');

//@desc GET All users (admin only)
//@route GET /api/users
// @access Private (Admin)
const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'member' }).select('-password');

        // add task counts to each user
        const usersWithTaskCounts = await Promise.all(users.map(async (user) => {
            const pendingTasks = await Task.countDocuments({ assignedTo: user._id, status: 'Pending' });
            const inProgressTasks = await Task.countDocuments({ assignedTo: user._id, status: "in Progress" });
            const completedTasks = await Task.countDocuments({ assignedTo: user._id, status: "Completed" });
            return {
                ...user._doc,
                pendingTasks,
                inProgressTasks,
                completedTasks,
            }
        }))
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// @desc GET user by ID
// @route GET /api/users/:id
// @access private
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(400).json({ message: "User not found" })
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


module.exports = { getUsers, getUserById };