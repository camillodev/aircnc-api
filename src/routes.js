const express = require("express");
const multer = require("multer");
const uploadConfig = require('./config/upload')

const SessionController = require("./controlers/SessionController");
const SpotController = require("./controlers/SpotController");
const DashboardController = require("./controlers/DashboardController");
const BookingController = require("./controlers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/sessions", SessionController.findUserByEmail);
routes.post("/sessions", SessionController.create);

routes.get("/spots", SpotController.list);
routes.post("/spots", upload.single('thumbnail'), SpotController.create);

routes.get("/dashboard", DashboardController.getSpotsByUserId);

routes.post('/spots/:spot_id/bookings', BookingController.create);



module.exports = routes;
