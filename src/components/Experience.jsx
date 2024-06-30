import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
      background: "#1d1836",
      color: "#fff",
      width: "45%", // Adjust width of content area
      padding: "20px", // Increase padding for content area
      }}
    contentArrowStyle={{ borderRight: "none", borderLeft: "7px solid #232631" }} // Adjust arrow style
    date={experience.date}
    iconStyle={{ background: experience.iconBg, width: "80px", height: "80px" }} // Increase size of icon
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
    >
    <div>
      <h3 className='text-white text-3xl font-bold'>{experience.title}</h3> {/* Increase font size */}
      <p className='text-secondary text-lg font-semibold'>{experience.company_name}</p> {/* Increase font size */}
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-base pl-1 tracking-wider' // Increase font size
        >
          {point}
        </li>
      ))}
    </ul>
    </VerticalTimelineElement>

  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experiences
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
export default SectionWrapper(Experience, "work");