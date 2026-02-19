import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../lib/db.js";
import bcrypt from "bcryptjs";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
    console.log("REGISTER API HIT");
  console.log("BODY:", req.body);
  // tylko POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
  typeof req.body === "string"
    ? JSON.parse(req.body)
    : req.body;

const { username, email, password } = body;


    // sprawdzenie czy dane istnieją
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // hash hasła
    const hash = await bcrypt.hash(password, 10);

    // zapis do Neon DB
    await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hash})
    `;

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({ error: "Register failed" });
  }
}
