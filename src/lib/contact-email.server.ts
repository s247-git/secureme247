import type { ContactInput } from "./contact.server";

// Email delivery is wired up once the sender domain is verified.
// Until then submissions are still saved to the database so no lead is lost.
export async function sendContactEmails(
  data: ContactInput,
  submissionId: string,
): Promise<boolean> {
  console.warn(
    `[contact] submission ${submissionId} from ${data.email} saved, but no verified sender domain is configured yet — no email sent.`,
  );
  return false;
}