// validations/taskValidation.js
import Joi from "joi";

export const taskSchema = {
  body: Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Title is required",
      "string.min": "Title should be at least 3 characters",
      "string.max": "Title cannot be longer than 100 characters",
    }),

    description: Joi.string().max(500).required().messages({
      "string.empty": "Description is required",
      "string.max": "Description cannot exceed 500 characters",
    }),

    completed: Joi.boolean().default(false).messages({
      "boolean.base": "Completed must be true or false",
    }),

    priority: Joi.string()
      .valid("low", "medium", "high")
      .default("medium")
      .messages({
        "any.only": "Priority must be one of: low, medium, high",
      }),

    dueDate: Joi.date().iso().greater("now").required().messages({
      "date.base": "Due date must be a valid date",
      "date.format": "Due date must be in ISO format",
      "date.greater": "Due date must be in the future",
      "any.required": "Due date is required",
    }),
  }),
};
