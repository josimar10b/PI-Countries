const { Country } = require("../db.js");

const getNameCountry =async (req, res) => {
    try {
        const { nombre } = req.query
        console.log(nombre);
        //const nameCountry = await Country.findOne({ where: { name: nombre } })
        const allCountries = await Country.findAll();
        const nameCountry = allCountries.find((count) => count.name.toLowerCase() === nombre.toLowerCase());
        res.status(200).json(nameCountry)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = getNameCountry