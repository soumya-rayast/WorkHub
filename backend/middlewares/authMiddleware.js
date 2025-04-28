const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith('Bearers')) {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } else {
            res.status(401).json({ message: 'Not Authorized, no token' })
        }
    } catch (error) {
        res.status(401).json({ message: 'Token failed', error: error.message })
    }
}

// Middleware for admin-only access
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(404).json({ message: 'Access denied, admin only ' })
    }
}

module.exports = { protect, adminOnly }