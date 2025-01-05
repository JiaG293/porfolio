import React from "react";
import "./BodyProject.css";
import ProjectItem from "../ProjectItem";
import { skills } from "../../assets/data/skills";
import Typewriter from "../../utils/Typewriter";

// Mảng kỹ năng cụ thể cho từng dự án
const techStacks1 = skills.filter((skill) =>
  ["MongoDB", "Express.js", "Node.js", "React", "AWS", "SocketIO"].includes(
    skill.name
  )
);

const techStacks2 = skills.filter((skill) =>
  [
    "React",
    "Spring",
    "Java",
    "Kafka",
    "Redis",
    "Docker",
    "PostgreSQL",
  ].includes(skill.name)
);

const techStacks3 = skills.filter((skill) =>
  ["Java", "JavaFX", "SQL Server"].includes(skill.name)
);

const techStacks4 = skills.filter((skill) =>
  [
    "React",
    "Tailwind CSS",
    "Spring",
    "Java",
    "Kafka",
    "Redis",
    "Docker",
    "PostgreSQL",
    "Elastic Search",
    "MongoDB",
  ].includes(skill.name)
);

const BodyProject = () => {
  return (
    <div className="project__container">
      <div className="project__hero">
        <h1>
          <Typewriter
            text={"Projects"}
            duration={500}
            className="about__title"
          />
        </h1>
      </div>
      <ProjectItem
        imageSrc="/assets/img/asgy.gif"
        projectName="ASGY"
        subTitle="Real-time chat web"
        description="Developed a chat app with real-time messaging and user authentication using React.js, Express.js, Socket.io, JWT, MongoDB, and AWS S3."
        teamSize={2}
        role="Backend Developer"
        time={"Jan 2024 – May 2024"}
        techStacks={techStacks1}
        previewLink="https://www.youtube.com/watch?v=8bUs-YII4BY"
        sourceLink="https://github.com/JiaG293/asgy"
      />
      <ProjectItem
        imageSrc={"/assets/img/jobtify.gif"}
        projectName="Jobtify"
        subTitle="Jobs Matching Platforms"
        description="This web application aims to connect recruiters with suitable candidates based on their requirements. Simultaneously, the application suggests relevant job opportunities to candidates based on employer specifications."
        teamSize={2}
        role="Backend Developer"
        time={"Oct 2024 - Present"}
        techStacks={techStacks2}
        previewLink="https://www.youtube.com/watch?v=8bUs-YII4BY"
        sourceLink="https://github.com/JiaG293/jobtify"
      />
      <ProjectItem
        imageSrc={"/assets/img/ahg.gif"}
        projectName="AHG"
        subTitle="Salary Management"
        description="This is a payroll management application designed for a backpack manufacturing company. It includes features for employee and worker time tracking, payroll calculation, product management, and production scheduling."
        teamSize={2}
        role="Fullstack Developer"
        time={"Sep 2023 - Nov 2023"}
        techStacks={techStacks3}
        previewLink="https://www.youtube.com/watch?v=8bUs-YII4BY"
        sourceLink="https://github.com/JiaG293/QLLSP-AHG"
      />
      <ProjectItem
        imageSrc={"/assets/img/mcs.gif"}
        projectName="MCS (PREVIEW)"
        subTitle="Hostel Management"
        description="This is a property management system designed for boarding houses and entire houses. It includes features for managing room/house availability, creating electronic contracts, managing facilities, calculating rent based on schedules, and processing bank payments."
        teamSize={2}
        role="Backend Developer"
        time={"Nov 2024 - Present"}
        techStacks={techStacks4}
        previewLink="https://mcs.jiag.id.vn"
        sourceLink="https://github.com/JiaG293/mcs"
      />
    </div>
  );
};

export default BodyProject;
