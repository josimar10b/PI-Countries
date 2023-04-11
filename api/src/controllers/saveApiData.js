const axios = require("axios");
const { Country } = require("../db.js");

const getApiData = async () => {
  let { data } = await axios.get("https://restcountries.com/v3/all");
  let countriesData = data.map((count) => {
    return {
      id: count.cca3,
      name: count.name?.common,
      imageFlag: count.flags[1],
      continents: count.continents[0],
      capital: count.capital ? count.capital[0] : "no se encontro",
      subregion: count.subregion ? count.subregion : "no se encontro",
      area: count.area ? count.area : "no se encontro" ,
      poblacion: count.population,
    };
  });
  return countriesData
  
}

const saveApiData = async () => {

    if (!(await Country.count())) {
        const allCountries = await getApiData()
        await Country.bulkCreate(allCountries)
        return await Country.findAll()
    } else return await Country.findAll()
  
};

module.exports = {saveApiData};
