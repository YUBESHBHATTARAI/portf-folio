import Description from "@/Components/Description";

import Projects from "@/Components/Projects";
import Education from "@/Components/Education";
import Slider from "@/Components/Slider";


export default function Home() {
  return (
    <div>
      <Description />
      <Projects />
       <Slider/>
      <Education />
    </div>
  );
}
