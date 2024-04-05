import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "MakanPal",
    projectinfo: "internship • 2023",
    description:
      "A virtual queuing system to reduce physical queue times for staff during lunch hours.",
    image: "/images/projects/cover1.png",
    url: "/makanpal",
  },

  {
    id: 2,
    title: "homebuddy",
    projectinfo: "school • solo • 2022",
    description:
      "Connecting apartment hunting with district research, improving accessibility and security for prospective tenants.",
    image: "/images/projects/cover2.png",
    url: "https://bootcamp.uxdesign.cc/homebuddy-an-apartment-hunting-mobile-app-ux-case-study-1a3b06bb1bdf",
  },

  {
    id: 3,
    title: "Eaterio",
    projectinfo: "school • team (4pax) • 2022",
    description:
      "Decide where and what to eat collaboratively, with trusted recommendations from your social circles.",
    image: "/images/projects/cover3.png",
    url: "https://uxfol.io/p/98661551/030f3a8d",
  },

  {
    id: 4,
    title: "Noise Tracker",
    projectinfo: "hackathon • team (3pax) • 2021",
    description:
      "A community spirit-building application to help identify noise disturbance sources in the Sembawang community.",
    image: "/images/projects/cover4.png",
    url: "/",
  },

  {
    id: 5,
    title: "Boucy Escape",
    projectinfo: "school • solo • 2021",
    description: "Coded a platform game with HTML, CSS, JavaScript.",
    image: "/images/projects/cover5.png",
    url: "/bouncyescape/index.html",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-[#574F4A] mt-12">
        {" "}
        My Works
      </h2>
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-16 lg:p-24 lg:px-56">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            projectinfo={project.projectinfo}
            description={project.description}
            imgUrl={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
