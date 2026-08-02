import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact.server";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { handleContactSubmission } = await import("./contact-handler.server");
    return handleContactSubmission(data);
  });