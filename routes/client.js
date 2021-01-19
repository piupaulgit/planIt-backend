const express = require('express');
const { addClient, getAllClients } = require('../controllers/client');
const router = express.Router()


// add client
router.post('/client/add', addClient)


// fetch all clients
router.get('/clients', getAllClients)

module.exports = router;