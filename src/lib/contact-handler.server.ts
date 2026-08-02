import type { ContactInput } from "./contact.server";

export async function handleContactSubmission(data: ContactInput) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { data: row, error } = await supabaseAdmin
    .from("contact_submissions")
    .insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      service: data.service || null,
      message: data.message || null,
      source: data.source || null,
    })
    .select("id")
    .single();

  if (error) {
    console.error("[contact] failed to save submission", error);
    throw new Error("We couldn't save your request. Please call (703) 755-0014.");
  }

  let emailed = false;
  try {
    const { sendContactEmails } = await import("./contact-email.server");
    emailed = await sendContactEmails(data, row.id);
  } catch (err) {
    console.error("[contact] email notification failed", err);
  }

  return { ok: true as const, id: row.id, emailed };
}