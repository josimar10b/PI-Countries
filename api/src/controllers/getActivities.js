const { Activity } = require("../db.js")

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll() 
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = getActivities