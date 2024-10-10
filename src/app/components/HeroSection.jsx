"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { cn } from "../../../utils/cn";
import { Button } from "./ui/moving-border";
import SkillBox from "./SkillBox";

const HeroSection = () => {
  const logo = {
    src: "/public/images/skills/react.svg",
    width: 200,
    height: 200,
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ayush Kumar",
                2000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A black screen coder who finds joy in coding and passion in content creation.
            <br />
            For every problem in life, let&apos;s develop software to tackle it - that&apos;s my motto.
          </p>
          <div className="flex justify-start items-center">
            <Link href="https://drive.google.com/file/d/1ABCUAFQi0iRBktX7_BSmvLo5EyM5ZsmB/view?usp=drivesdk" target="_blank" className="px-1 inline-block py-1 w-full sm:w-fit mt-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-gray-800"
              >
                Download CV
              </Button>
            </Link>
            <div>
              <ul class="flex justify-center mt-5 space-x-5 ps-10">
                <li>
                  <a href="https://github.com/AyushKumar535" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ayush-kumar-3123a03k/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg class="w-10 h-10 mt-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </motion.div>
        {/* <SkillBox
          backgroundColor="bg-blue-400"
          textColor="text-black"
          logo="/images/skills/react.svg"
          name="React"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;