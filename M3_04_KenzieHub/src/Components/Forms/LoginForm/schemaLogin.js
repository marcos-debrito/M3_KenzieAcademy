import { z } from "zod";

export const verifyLogin = z.object({
  email: z.string().nonempty("").email(""),
  password: z.string().nonempty(""),
});
