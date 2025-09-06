import Todo from "../models/Todo.js";

export const createTask = async (req, res) => {
  const { title, description, completed, priority, dueDate } = req.body;
  console.log(req.user);
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
