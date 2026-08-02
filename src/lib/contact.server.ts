import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  source: z.string().trim().max(200).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
