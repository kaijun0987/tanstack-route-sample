import { Link } from "@tanstack/react-router";

export const AboutUsHeader = () => {
  return (
    <header>
      <Link className="mr-4 font-bold" to="/about-us/introduction">
        Intro
      </Link>

      <Link className=" font-bold" to="/about-us/about">
        About
      </Link>
    </header>
  );
};
