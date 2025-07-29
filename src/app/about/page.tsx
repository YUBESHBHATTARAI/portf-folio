export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] mt-[4.5em] text-justify p-5 m-2 flex flex-col items-center md:justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="w-full md:w-[80%] lg:w-[64%]">
        <h1 className="text-xl md:text-2xl lg:text-[1.7rem] p-2 mt-2 font-poppins italic  ">
         <span className="text-4xl  uppercase ">
            I
         </span>
          'm a passionate and curious  
          <span className="text-[2rem] text-gray-800 not-italic font-semibold "> WeB Developer </span>
           dedicated to building impactful, real-world digital experiences. My primary focus is front-end development using modern technologies like React, Next.js, and Tailwind CSS — but I’m equally invested in backend solutions with Node.js and MongoDB.
        </h1>

        <h1 className="text-xl md:text-2xl lg:text-[1.7rem] p-2 mt-2 font-poppins italic">
          I love transforming ideas into intuitive and efficient interfaces. From personal projects to collaborative work, I prioritize clean code, accessibility, performance, and user experience. I've built responsive portfolios, interactive UIs, and dynamic web applications that reflect both creativity and functionality.
        </h1>

        <h1 className="text-xl md:text-2xl lg:text-[1.7rem] mt-4 p-3 font-poppins italic">
          I’m also a lifelong learner — actively exploring new tools, frameworks, and industry practices. Whether I’m contributing to open-source, solving problems on platforms like LeetCode, or diving into documentation, my goal is constant improvement. Let’s connect, collaborate, and bring great ideas to life.
        </h1>
      </div>
    </div>
  );
}
