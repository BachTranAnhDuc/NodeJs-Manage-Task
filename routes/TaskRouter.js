const {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controller/TaskController');

const express = require('express');
const router = express.Router();

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;
