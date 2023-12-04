import styles from "./styles.module.css";
import { user } from "../../data/user.js";
import whatsApp from "../../assets/whatsapp-icon.png";
import linkedIn from "../../assets/linkedin-icon.png";
import gitHub from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <footer>
      <div>
        <span>Contato</span>
        <figure>
          <img src={whatsApp} alt="Logo do whatsApp" />
          <img src={linkedIn} alt="Logo do LinkedIn" />
          <img src={gitHub} alt="Logo do gitHub" />
        </figure>
      </div>

      <p>Todos os direitor reservados - {user}</p>
    </footer>
  );
};


