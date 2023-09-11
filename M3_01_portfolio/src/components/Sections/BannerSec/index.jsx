import { Button } from "../../Button";
import { phrase, username } from "../../../data/user.js";
import banner from "../../../assets/banner-img.png";
import styles from "./styles.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.bannerSec}>
      <div>
        <span className={styles.name}>{username}</span>
        <span className={styles.welcome}>Bem Vindo ao meu porfólio</span>
        <p>{phrase}</p>

        <Button>Saiba mais</Button>
      </div>
      <img
        src={banner}
        alt="Imagem ilustrativa, contém algumas telas de monitores para enfeitar a página"
      />
    </section>
  );
};
