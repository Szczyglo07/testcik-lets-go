import { sql } from "../lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  const users = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;

  const user = users[0];

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ error: "Wrong password" });
  }

  const token = jwt.sign(
    { userId: user.user_id },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  res.status(200).json({ token });
}
