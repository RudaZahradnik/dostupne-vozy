import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
  source: z.string().default("detail-form"),
  company: z.string().max(0).optional(),
});
