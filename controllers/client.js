const Client = require("../models/client");
const { sendResponseToFrontend,handleError } = require("../shared/handleResponse");

// add client
module.exports.addClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        sendResponseToFrontend(res, 201, client, false, "client successfully added")
    }
    catch (err){
        sendResponseToFrontend(res, 400, err, true)
    }
}



// get all clients
module.exports.getAllClients = (req, res) => {
    Client.find().exec((err, clients) => {
        if(err){
            sendResponseToFrontend(res, 400, {},true, "No Clients added")
        }
        else{
            sendResponseToFrontend(res, 200, clients, false, "clients successfully fetched")
        }
    })
}