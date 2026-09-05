import { supabase } from "@/lib/supabase";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !email || !phone) {
    return Response.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ full_name: name, email, phone });

  if (error) {
    return Response.json({ error: "Could not save your message. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 201 });
}
