import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  try {
    if (!token)
      return res.status(401).json({ message: `Access Denied. Invalid Token` });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
