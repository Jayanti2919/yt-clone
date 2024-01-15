import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
// import Logo from "../"

const RoundedRectangle = () => {
  return <div className={`bg-secondary h-[65vh] rounded-full w-[10vw]`}></div>;
};

const Landing = () => {
  const screenWidth = window.innerWidth;
  const roundedRect = [];

  for (let i = 0; i < screenWidth; i += 120) {
    console.log(i);
    roundedRect.push(<RoundedRectangle key={i} />);
  }
  return (
    <div className="landing h-screen overflow-x-hidden">
      <div className="w-full h-[40vh] bg-[#897C5A] mt-[30vh] relative ">
        <div className="absolute flex gap-1 -translate-x-[5vw] -top-14">
          {roundedRect}
        </div>
        <div className="flex items-center justify-between px-36">
          <div className="text-white z-10 relative">
            <Typography
              color="primary"
              className=" text-6xl font-bold uppercase text-shadow-md"
              style={{ "text-shadow": "0px 4px 4px #FEFFFF", color: "#393939" }}
            >
              videos.
            </Typography>
            <Typography
              className="text-primary text-6xl font-bold uppercase text-shadow-md"
              style={{ "text-shadow": "0px 4px 4px #FEFFFF", color: "#393939" }}
            >
              movies.
            </Typography>
            <Typography
              className="text-primary text-6xl font-bold uppercase text-shadow-md"
              style={{ "text-shadow": "0px 4px 4px #FEFFFF", color: "#393939" }}
            >
              and more.
            </Typography>
            <Button className="bg-primary px-4 py-2 mt-5 rounded-none flex items-center gap-2 shadow-lg shadow-white">
              <span>Get Started</span>
              <FaArrowRight />
            </Button>
          </div>
          <div className="">
            <img
              src="logo.png"
              alt="logo"
              className="h-[50vh] w-[40vh] relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
