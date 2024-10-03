const db = require("../models");
const User = db.User;
const Address = db.Address;

exports.createUserWithAddress = async (req, res) => {
  try {
    const { name, address } = req.body;
    
    
    console.log("Received Name:", name);
    console.log("Received Address:", address);

    
    if (!name || !address) {
      return res.status(400).send({ message: "Name and Address are required" });
    }

    
    const user = await User.create({ name });
    const newAddress = await Address.create({ address, userId: user.id });

    res.status(200).send({ message: "User and Address created successfully!" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ message: "An error occurred!", error });
  }
};
