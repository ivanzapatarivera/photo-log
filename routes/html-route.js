var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/profile.html'))
});

router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/profile.html'))
});

router.get('/LogYourPhoto', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/photo-engine.html'))
});


router.get('/LogYourProfilePicture', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/profile-engine.html'))
});

router.get('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/thankyou.html'))
});

module.exports = router;