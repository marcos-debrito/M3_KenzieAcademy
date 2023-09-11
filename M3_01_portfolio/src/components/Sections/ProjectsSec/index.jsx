import styles from "./style.module.css";
import { projects } from "../../../data/projects";
import githubLogo from "../../../assets/git-icon.png";

export const ProjectSection = () => {
  return (
    <section className={styles.projectsSec}>
      <span>Projetos</span>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.name}>
              <div>
                <span>{project.name}</span>
                <img
                  src={githubLogo}
                  alt="Imagem de um gato, referente ao logo do gitHub"
                />
              </div>
              <span>{project.description}</span>
              <a>Saiba mais</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
