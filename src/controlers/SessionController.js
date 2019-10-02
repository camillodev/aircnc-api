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
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("FullURL " + fullUrl)

    const { email } = req.query;
    console.log(email)


    let user = await User.findOne({ email });
    if (!user) {
     return res.json({error: "user not founded"});
    }
    
    return res.json(user);
  }

};
