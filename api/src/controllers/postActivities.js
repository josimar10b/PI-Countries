const { Activity, Country_Activity } = require("../db.js");


const postActivities = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, CountryId } = req.body
        //const allActivities = await Activity.findAll() 
        if ( !name || !dificultad || !duracion || !temporada) {
            return res.status(400).json({msg: "Faltan datos"})
        }
        if (dificultad < 1 || dificultad > 5 ) {
            return res.status(400).json({msg: "la dificutad tiene que estar en el rango de 1 al 5"})
        }
        //Activity.name = Activity.name || name
        const newActivity = await Activity.create ({
            name,
            dificultad,
            duracion,
            temporada
        })

        const postActivity = await Country_Activity.create ({
            CountryId: CountryId,
            ActivityId: newActivity.id
        })
        //allActivities.push(newActivity)
        res.status(200).json(newActivity)

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = postActivities