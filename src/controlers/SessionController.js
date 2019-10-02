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
  }
};
