import { useForm } from "react-hook-form";
import { StyledForm, Container } from "../styles.js";
import { Link } from "react-router-dom";
import { Input } from "../Fragments/Input/index.jsx";
import logo from "../../../assets/logo.svg";
import eye from "../../../assets/eye.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyLogin } from "./schemaLogin.js";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

export const LoginForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(verifyLogin),
  });

  const { UserLogin } = useContext(UserContext);

  const submit = async (formData) => {
    setIsLoading(true);
    await UserLogin(formData);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container>
      <figure className="logo__login">
        <img src={logo} />
      </figure>
      <StyledForm onSubmit={handleSubmit(submit)} autoComplete="off">
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email..."
          {...register("email")}
        />

        <fieldset className="box__password">
          <label htmlFor="pass">Senha</label>

          {viewPass ? (
            <input
              type="text"
              id="pass"
              {...register("password")}
              placeholder="Digite sua senha..."
            />
          ) : (
            <input
              type="password"
              id="pass"
              {...register("password")}
              placeholder="Digite sua senha..."
            />
          )}
          <img
            src={eye}
            onClick={() => {
              viewPass === true ? setViewPass(false) : setViewPass(true);
            }}
          />
        </fieldset>

        {loading ? (
          <button className="login" disabled>
            carregando...
          </button>
        ) : (
          <button className="login" type="submit">
            Entrar
          </button>
        )}
        <p>Ainda não possui uma conta?</p>

        <Link className="register" to="/register">
          Cadastre-se
        </Link>
      </StyledForm>
    </Container>
  );
};
