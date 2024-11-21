import React from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function Section({
  id,
  bgClass,
  height = "",
  children,
}: {
  id?: string;
  bgClass: string;
  height?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${bgClass} ${height}`}>
      {/* add snap property or something */}
      {children}
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
  const sponsorRef = useRef(null);
  const isInView = useInView(sponsorRef, { once: true });

  return (
    <div className="bg-background-primary dark:bg-background-secondary">
      <Section id="home" bgClass="bg-none" height="h-[800px] lg:h-[600px]">
        <div className="container mx-2 h-full items-center justify-center px-6 xl:mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 lg:flex-nowrap">
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
            <div className="flex h-[380px] w-full justify-center md:justify-end lg:h-[600px]">
              <img
                src="/heroImage.png"
                alt="Fitness training"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bgClass="bg-background-secondary dark:bg-background-primary p-4 md:p-8">
        <div
          className="flex flex-col items-center justify-around space-y-8 md:flex-row md:space-y-0"
          ref={sponsorRef}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-fit flex-col items-center justify-center"
          >
            <img
              src="/favicon.ico"
              alt="Portfolio Icon"
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
            <h2 className="mt-2 text-sm md:text-base lg:text-lg">
              Mahirs Portfolio
            </h2>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src="/Forbessvg.svg"
            alt="Forbes"
            className="h-12 md:h-16 lg:h-20"
          />
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            src="/fortune-seeklogo.svg"
            alt="Fortune"
            className="h-8 md:h-9 lg:h-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            src="/redbullenergydrink.svg"
            alt="RedBull"
            className="h-12 object-contain md:h-16 lg:h-20"
          />
        </div>
      </Section>

      <Section id="about" bgClass="bg-none">
        <h1 className="m-4 text-center text-4xl font-bold text-brand-primary dark:text-brand-secondary">
          More than just a gym, a community
        </h1>
        <p>
          We provide the best fitness equipment, trainers and calsses to get to
          your ultimate fitness goals with ease. We provide true care for each
          and every member
        </p>

        <div>
          <div>
            <h3>State of the Art Facilities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ratione sint eius obcaecati aspernatur consequuntur,
              omnis nisi enim, in explicabo fugit aperiam magni. Ipsam animi in
              cum, sunt alias quis.
            </p>
          </div>
          <div>
            <h3>100's of Diverse Classes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ratione sint eius obcaecati aspernatur consequuntur,
              omnis nisi enim, in explicabo fugit aperiam magni. Ipsam animi in
              cum, sunt alias quis.
            </p>
          </div>
          <div>
            <h3>Expert of Pro Trainers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ratione sint eius obcaecati aspernatur consequuntur,
              omnis nisi enim, in explicabo fugit aperiam magni. Ipsam animi in
              cum, sunt alias quis.
            </p>
          </div>
        </div>
        <div>
          {/* left */}
          <div>
            <img src="/BenefitsPageGraphic.png" alt="" />
          </div>

          {/* right */}
          <div>
            <h2>Millions of happy members getting fit</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              culpa distinctio id minima ipsam corrupti optio magnam, blanditiis
              error nihil! Quia repudiandae, iusto ab quos id dignissimos maxime
              quas laborum!
            </p>
          </div>
        </div>
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
  );
};

export default Home;
