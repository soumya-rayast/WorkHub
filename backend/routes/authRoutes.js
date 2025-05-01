const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

//Auth Routes 
// Register a new user 
router.post('/register', registerUser);
// Login user
router.post("/login", loginUser);
// Get user Profile
router.get('/profile', protect, getUserProfile);
// Update User Profile
router.put('/profile', protect, updateUserProfile);
// Upload Profile image
router.post('/upload-image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file Uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
})

module.exports = router;