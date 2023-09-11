import { z } from "zod";

export const verifyNewUser = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório!")
      .min(2, "Insira pelo menos 2 caracteres!"),
    email: z
      .string()
      .nonempty("O email é obrigatório!")
      .email("O email fornecido é inválido!"),
    password: z
      .string()
      .nonempty("A senha é obrigatória!")
      .min(8, "A senha precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*[!@#$%^&*()\-_=+{};:,<.>])/,
        "É necessário ter um caracter especial!"
      ),
    confirm: z.string().min(1, "A confirmação é obrigatória!"),
    bio: z.string().nonempty("O campo é obrigatório!"),
    contact: z.string().nonempty("O campo é obrigatório!"),
    course_module: z.string(),
  })
  .refine(({ password, confirm }) => password == confirm, {
    message: "As senhas estão diferentes!",
    path: ["confirm"],
  });
