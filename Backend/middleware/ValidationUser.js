// middleware/ValidationUser.js
import { validationResult } from 'express-validator';

// Middleware function to handle request validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { handleValidationErrors };
