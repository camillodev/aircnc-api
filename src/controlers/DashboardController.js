const Spot = require("../models/Spot");

// index, show, store, update, destroy
// list, getById, Create, Update, delete

module.exports = {
  //trear different cases with lowercase or upper case
  async getSpotsByUserId(req, res) {
    const { user_id } = req.headers;
    const spots = await Spot.find({createdBy: user_id});

    return res.json(spots);
  }

};
