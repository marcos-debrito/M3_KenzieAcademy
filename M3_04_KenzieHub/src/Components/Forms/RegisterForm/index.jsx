import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, StyledForm } from "../styles";
import { Link } from "react-router-dom";
import { verifyNewUser } from "./schemaRegister";
import { Input } from "../Fragments/Input";
import logo from "../../../assets/logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const [loading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifyNewUser),
  });

  const { UserRegister } = useContext(UserContext);

  const newUser = async (formData) => {
    setIsLoading(true);
    await UserRegister(formData);
    reset();
  };

  return (
    <Container>
      <div className="logo__register">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <Link to="/">voltar</Link>
      </div>
      <StyledForm
        onSubmit={handleSubmit(newUser)}
        noValidate
        autoComplete="off"
      >
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome..."
          error={errors.name}
          {...register("name")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email..."
          error={errors.email}
          {...register("email")}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha..."
          error={errors.password}
          {...register("password")}
        />
        <Input
          label="Confirme a senha"
          type="password"
          placeholder="Digite novamente sua senha..."
          error={errors.confirm}
          {...register("confirm")}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você!"
          error={errors.bio}
          {...register("bio")}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          error={errors.contact}
          {...register("contact")}
        />
        <label>Selecione o módulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </select>

        {!loading ? (
          <button className="login">Cadastre-se</button>
        ) : (
          <button className="login" disabled>
            Carregando...
          </button>
        )}
      </StyledForm>
    </Container>
  );
};
