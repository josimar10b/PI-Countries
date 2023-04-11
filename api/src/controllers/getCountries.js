// const { default: axios } = require("axios");
const { Country } = require("../db.js");



const getCountries =async (req, res) => {
    try {
        
        const allCountries = await Country.findAll();
        res.status(200).json(allCountries)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = getCountries 