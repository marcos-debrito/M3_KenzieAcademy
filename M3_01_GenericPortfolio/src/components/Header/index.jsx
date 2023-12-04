import styles from "./styles.module.css";
import { Button } from "../Button/index";

export const Header = () => {
  return (
    <header>
      <span>Portfólio</span>
      <ul>
        <li>Sobre</li>
        <li>Stack</li>
        <li>Projetos</li>
      </ul>
      <Button>Contato</Button>
    </header>
  );
};
