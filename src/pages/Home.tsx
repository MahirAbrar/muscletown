import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import gymFitnessSvg from "../assets/gym-fitness-svgrepo-com.svg";
import gymStationSvg from "../assets/gym-station-svgrepo-com.svg";
import gymSvg from "../assets/gym-svgrepo-com.svg";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({
  id,
  bgClass,
  height = "h-screen", // Add height prop with default value
  children,
}: {
  id?: string;
  bgClass: string;
  height?: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // This means the animation starts when the section's start hits the viewport's start
  });

  const y = useParallax(
    useSpring(scrollYProgress, {
      stiffness: 50,
      damping: 30,
      mass: 0.5,
    }),
    50,
  );

  return (
    <section className={`${bgClass} relative ${height}`}>
      <div ref={ref} className="h-screen snap-center">
        {children}
      </div>
      {id && (
        <motion.div
          style={{ y }}
          className="absolute right-20 text-4xl font-bold text-brand-primary/20 dark:text-brand-secondary/20"
        >
          #{id}
        </motion.div>
      )}
    </section>
  );
}

// dummy svg
// SVG Component for the right side
const FitnessIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="150" fill="#990404" fillOpacity="0.1" />
    <path
      d="M100,200 C100,150 300,150 300,200"
      stroke="#ff6100"
      strokeWidth="8"
      fill="none"
    />
    <rect
      x="150"
      y="150"
      width="100"
      height="100"
      fill="#990404"
      fillOpacity="0.2"
    />
  </svg>
);

const Home = () => {
  const { scrollYProgress } = useScroll({
    offset: ["20vh", "80vh"], // This means the animation starts after scrolling 20% of viewport height and ends at 80%
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-2 origin-[0%] bg-brand-primary dark:bg-brand-secondary"
        style={{ scaleX }}
      />

      <div className="h-screen snap-y snap-mandatory overflow-y-scroll bg-background-primary dark:bg-background-secondary">
        <Section id="home" bgClass="bg-none" height="h-5/6">
          <div className="container mx-auto h-full px-6">
            <div className="flex h-full flex-wrap items-center justify-between gap-8 lg:flex-nowrap">
              {/* Left side */}
              <div className="flex w-full flex-col space-y-10 pl-0 pt-12 lg:w-1/2 lg:pl-4 lg:pt-0">
                <div className="relative flex flex-col items-start">
                  {" "}
                  <h2 className="absolute -top-8 text-left text-7xl font-bold text-brand-primary opacity-10 md:-top-20 md:left-4 md:text-9xl dark:text-brand-secondary">
                    MuscleTown
                  </h2>
                  <h1 className="text-left text-6xl font-bold text-brand-primary dark:text-brand-secondary">
                    MuscleTown
                  </h1>
                  <h2 className="mt-2 text-left text-3xl font-semibold text-text-primary dark:text-text-secondary">
                    Evolutionary fitness
                  </h2>
                </div>
                <p className="max-w-xl text-left text-lg text-text-primary dark:text-text-secondary">
                  Unrivaled Gym, Unparalleled Training Fitness Classes. World
                  Class Equipments to get the Body Shapes that you Dream of. Get
                  your Dream Body Now.
                </p>
                <div className="flex space-x-4 pt-4">
                  <button className="rounded-lg bg-brand-primary px-8 py-3 font-semibold text-text-secondary transition-colors duration-300 hover:bg-brand-primaryLight">
                    Join Now
                  </button>
                  <button className="rounded-lg border-2 border-brand-primary px-8 py-3 font-semibold text-brand-primary transition-colors duration-300 hover:bg-brand-primary hover:text-text-secondary">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right side */}
              <div className="flex h-[700px] w-full items-center justify-center lg:w-1/2">
                <img
                  src="/heroImage.png"
                  alt="Fitness training"
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section bgClass="bg-background-secondary dark:bg-background-primary">
          <h1 className="text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            Some brand logos
          </h1>
        </Section>

        <Section id="about" bgClass="bg-none">
          <h1 className="pt-20 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            More than just a gym, a community
          </h1>
        </Section>

        <Section bgClass="bg-background-secondary dark:bg-background-primary">
          <h1 className="text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            Some brand logos
          </h1>
        </Section>

        <Section id="about" bgClass="bg-none">
          <h1 className="pt-20 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            More than just a gym, a community
          </h1>
        </Section>

        <Section
          id="classes"
          bgClass="bg-background-secondary dark:bg-background-primary"
        >
          <h1 className="pt-20 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            Our classes
          </h1>
        </Section>

        <Section id="prices" bgClass="bg-none">
          <h1 className="pt-20 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            Prices
          </h1>
        </Section>

        <Section
          id="join"
          bgClass="bg-background-secondary dark:bg-background-primary"
        >
          <h1 className="pt-20 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
            Join now to be healthy and conquer the world
          </h1>
        </Section>
      </div>
    </>
  );
};

export default Home;
