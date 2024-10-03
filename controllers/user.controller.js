const db = require("../models");
const User = db.User;
const Address = db.Address;

exports.createUserWithAddress = async (req, res) => {
  try {
    const { name, address } = req.body;
    const user = await User.create({ name });
    const newAddress = await Address.create({ address, userId: user.id });
    
    res.status(200).send({ message: "User and Address created successfully!" });
  } catch (error) {
    res.status(500).send({ message: "An error occurred!", error });
  }
};
