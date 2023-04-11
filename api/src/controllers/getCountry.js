const { Country, Activity } = require("../db.js");

const getCountry = async (req, res) => {
  try {
    const { idPais } = req.params;
    // const allCountries = await Country.findOne({ where: { id: idPais } })
    const allCountries = await Country.findAll({include:[{model:Activity}]});
    const idCountry = allCountries.find((count) => count.id.toLowerCase() === idPais.toLowerCase());
    res.status(200).json(idCountry);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = getCountry;

