"use server";

export async function submitRSVP(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email) {
    throw new Error("Name and Email are required");
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(error);
    throw new Error("Failed to submit RSVP");
  }
}
