const Spot = require("../models/Spot");
const User = require("../models/User");

// index, show, store, update, destroy
// list, getById, Create, Update, delete

module.exports = {
  //trear different cases with lowercase or upper case
  async list(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({techs: tech});

    return res.json(spots);
  },
  async create(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const {user_id} = req.headers;

    const user = await User.findById(user_id);
    if(!user){
      return res.status(400).json({ error: 'User does not exists'})
    }


    const spot = await Spot.create({
      createdBy: user_id,
      thumbnail: filename,
      techs: techs.split(',').map(tech => tech.trim()),
      company,
      price
    })
  
    return res.json(spot);
  }
};
