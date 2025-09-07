import Todo from "../models/Todo.js";

export const createTask = async (req, res) => {
  const { title, description, completed, priority, dueDate } = req.body;
  const newTask = new Todo({
    title,
    description,
    completed,
    priority,
    dueDate,
    user: req.user.id,
  });

  await newTask.save();
  res.status(201).json({ message: `Task created` });
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Todo.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Todo.find({ _id: id, user: req.user.id });
    console.log(task);
    if (task.length === 0) {
      return res.status(404).json({ message: `Task ${id} not found` });
    }
    res.status(200).json(task);
  } catch (e) {
    res.status(404).json({ error: `Task ${id} not found` });
  }
};
