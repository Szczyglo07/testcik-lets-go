import { sql } from "../lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { username, email, password } = req.body;

    // hash hasła
    const hash = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hash})
    `;

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Register failed" });
  }
}
