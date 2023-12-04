import { Header } from "./components/Header/index";
import { AboutSection } from "./components/Sections/AboutSec";
import { BannerSection } from "./components/Sections/BannerSec";
import { ProjectSection } from "./components/Sections/ProjectsSec";
import { TechSection } from "./components/Sections/TechSec";
import { Footer } from "./components/Footer/index";
import "./style/reset.css";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
};
