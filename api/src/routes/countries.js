const express = require("express");
const getCountries = require("../controllers/getCountries")
const getCountry = require("../controllers/getCountry");
const getNameCountry = require("../controllers/getNameCountry");

const router = express.Router();

router.get("/", getCountries)
router.get("/name", getNameCountry)
router.get("/:idPais", getCountry)

module.exports = { router }