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
