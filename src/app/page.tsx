import Description from "@/Components/Description";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Education from "@/Components/Education"
import Suggestion from "@/Components/Suggesstion";
import Slider from "@/Components/Slider";
import Image from "next/image";


import skill_1 from "/public/skills/C.png"
import skill_2 from "/public/skills/C++.png"
import skill_3 from "/public/skills/Html.png"
import skill_4 from "/public/skills/Js.png"
import skill_5 from "/public/skills/next.png"


const skills=[
  { src:skill_1, url:"/"},
  { src:skill_2, url:"/"},
  { src:skill_3, url:"/"},
  { src:skill_4, url:"/"},
  { src:skill_5, url:"/"},
]




export default function Home() {

  return (
    <div>
      <Description/>
      <About/>
      <Projects/>
      <Slider skills={skills} />
      <Education/>
      <Suggestion/>
    </div>
  );
}
