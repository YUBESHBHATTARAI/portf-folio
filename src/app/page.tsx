import Description from "@/Components/Description";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills"
import Education from "@/Components/Education"
import Suggestion from "@/Components/Suggesstion";
import AutoCarousel from "@/Components/Crousel";


export default function Home() {

  return (
    <div>
      <Description/>
      <About/>
      <Projects/>
      <Skills/>
      <AutoCarousel/>
      <Education/>
      <Suggestion/>
    </div>
  );
}
