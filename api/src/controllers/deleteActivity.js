
const { Activity } = require("../db.js");


const deleteActivity = async (req, res) => {
    try {
        // const { id } = req.params;
        // let allActivities = await Activity.findAll();
        // let deleteAct = allActivities.filter(act => act.id !== Number(id))

        // if (allActivities.length !== deleteAct.length) {
        //     allActivities = deleteAct
        // }

        // res.status(200).json(allActivities)

        const { id } = req.params;
        await Activity.destroy({
            where: { id}
        })
        res.status(200).json({msg: "eliminado correctamente"})

    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}

module.exports = deleteActivity;