const getAllTask = (req, res) => {
  res.status(200).json({ message: 'Get all task' });
};

const getTaskById = (req, res) => {
  res.status(200).json({ message: 'Get task by id' });
};

const createTask = (req, res) => {
  res.status(200).json({ message: 'Create Task' });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: 'Update task' });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: 'Delete Task' });
};

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
