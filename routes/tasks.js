const express = require('express')
const router = express.Router()

const { getAllTask,
        createTask,
        getTask,
        deleteTask,
        updateTask
} = require('../controllers/task')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)



module.exports = router