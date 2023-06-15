const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
//register
exports.register = async (req, res) => {
  const { fullName, email, phone, address, password,  } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) return res.status(409).json({ msg: "User already exist!" });

  try {
    const newUser = new User({
      fullName,
      email,
      phone,
      address,
      password,
     
    });
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address,
        registerDate: newUser.registerDate,
        userRole: newUser.userRole,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.messge });
  }
};
//login
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User does not exist!" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "Invalid credentials" });
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.auth = (req, res) => {
   res.send(req.user);
}
