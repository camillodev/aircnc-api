const User = require("../models/User");

// index, show, store, update, destroy
// list, getById, Create, Update, delete

module.exports = {
  async create(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  },

  async findUserByEmail(req, res) {
    const { email } = req.query;

    let user = await User.findOne({ email });
    if (!user) {
     return res.json({error: "user not founded"});
    }
    return res.json(user);
  }

};
