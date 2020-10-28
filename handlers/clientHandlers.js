const { v4: uuidv4 } = require("uuid");
const {
  clients,
  getClientByProp,
  removeClientByProp,
} = require("../data/clients");

// write your handlers here...
// handle request for all clients
const handleAllClients = (req, res) => {
  res.status(200).json({ status: 200, result: clients });
};
// handle by id
const handleClientId = (req, res) => {
  let cur_cus = getClientByProp("id", req.params.id);
  if (cur_cus) {
    res.status(200).json({ status: 200, result: cur_cus });
  } else {
    res.status(404).json({ status: 404, result: "Customer not found!" });
  }
};
// add client to the list
const handleAddClient = async (req, res) => {
  // get the reques body
  let cus_info = req.body;
  if (getClientByProp("email", cus_info.email)) {
    res.status(409).json({
      status: 409,
      result: "The email already exists in the database!",
    });
  } else {
    // get a unique id
    let new_id = uuidv4();
    while (getClientByProp("id", new_id)) {
      new_id = uuidv4();
    }
    // push to clients
    clients.push({ id: new_id, ...cus_info });
    res.status(201).json({
      status: 201,
      result: "Customer successfully created in the database!",
    });
  }
  //console.log(info);
};
const handleDeleteClient = (req, res) => {
  let cur_id = req.params.id;
  if (removeClientByProp("id", cur_id)) {
    res.status(200).json({
      status: 200,
      result: `The client with id ${cur_id} has been removed`,
    });
  } else {
    res.status(404).json({ status: 404, result: "The client was not found!" });
  }
};

module.exports = {
  handleAllClients,
  handleClientId,
  handleAddClient,
  handleDeleteClient,
};
