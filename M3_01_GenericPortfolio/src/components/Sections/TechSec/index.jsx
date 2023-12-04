import styles from "./styles.module.css";
import { technologies } from "../../../data/technologies.js";

export const TechSection = () => {
  return (
    <section className={styles.techSec}>
      <span>Tecnologias</span>
      <ul>
        {technologies.map((tech) => {
          return (
            <li key={tech.name}>
              <img src={tech.img} />
              <span>{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
