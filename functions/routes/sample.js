const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('Hello....!!!! App is running..');
});

module.exports = router;