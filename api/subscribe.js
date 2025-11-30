// api/subscribe.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, source = "website" } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  try {
    const base = process.env.AIRTABLE_BASE_ID;
    const table = process.env.AIRTABLE_TABLE_ID;
    const key = process.env.AIRTABLE_API_KEY;

    const url = `https://api.airtable.com/v0/${base}/${table}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              UrEmail: email,
              Source: source
            },
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Airtable error:", data);
      return res.status(500).json({ error: "Airtable error", details: data });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
