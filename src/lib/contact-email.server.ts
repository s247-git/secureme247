import type { ContactInput } from "./contact.server";
import { sendTemplateEmail } from "./email-templates/send-email";

export async function sendContactEmails(
  data: ContactInput,
  submissionId: string,
): Promise<boolean> {
  let notified = false;

  try {
    const res = await sendTemplateEmail("contact-notification", "info@secureme247.com", {
      templateData: {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        message: data.message,
        source: data.source,
      },
      idempotencyKey: `contact-notification-${submissionId}`,
      replyTo: data.email,
    });
    notified = res.sent;
  } catch (err) {
    console.error(`[contact] internal notification failed for ${submissionId}`, err);
  }

  try {
    await sendTemplateEmail("contact-confirmation", data.email, {
      templateData: { name: data.name, message: data.message },
      idempotencyKey: `contact-confirmation-${submissionId}`,
    });
  } catch (err) {
    console.error(`[contact] visitor confirmation failed for ${submissionId}`, err);
  }

  return notified;
}