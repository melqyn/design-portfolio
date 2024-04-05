import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, projectinfo, description, url }) => {
  return (
    <Link href={url} className="block h-full">
      <div
        className="h-full shadow-lg rounded-xl overflow-hidden hover:shadow-xl 
        hover:border-solid hover:border-2 hover:border-[#fff] hover:rounded-xl"
      >
        <div
          className="h-52 m:h-72 rounded-t-xl"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="text-[#574F4A] rounded-b-xl bg-[#fff] py-6 px-8 flex-grow">
          <p className="text-xs text-[#76655B] pb-2">{projectinfo}</p>
          <h5 className="text-xl font-semibold pb-4">{title}</h5>
          <p className="text-[#76655B] flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
