import Description from "@/Components/Description";

import Projects from "@/Components/Projects";
import Education from "@/Components/Education";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Description />
      <Projects />

      <Education />
    </div>
  );
}
