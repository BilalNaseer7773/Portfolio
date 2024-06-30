import React from "react";
import {Tilt} from  "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}><span className='text-[#915EFF]'> Introduction</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

      </motion.p>
      <div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <p className="text-2xl text-white font-bold mb-4">
          Hello! I'm a passionate software developer.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          I recently graduated with a Bachelor of Science in Computer Science from Memorial University of Newfoundland, boasting a proud GPA of <span className="text-[#915EFF] font-semibold">3.84/4.00</span>. Throughout my academic journey, I mastered various programming languages and technologies, always pushing the boundaries of what's possible.
        </p>
        <br className="sm:block hidden" />
  
        <p className="text-lg text-gray-300 mb-4">
          My portfolio is a testament to my dedication and creativity. It features a range of innovative projects, including a real-time Stock Trading Game that pulls data straight from the NYSE, a sophisticated modular Grid Search algorithm for pathfinding, and a digital rendition of the beloved "KingsDomino" game. These projects are a glimpse into my relentless pursuit of high-performance and cutting-edge solutions. Stay tuned for more exciting projects currently in the pipeline!
        </p>
        <br className="sm:block hidden" />
  
        <p className="text-lg text-gray-300 mb-4">
          I'm driven by a deep-seated passion for solving complex problems and delivering robust, efficient software solutions. Whether collaborating with a team or steering a project solo, I am committed to excellence and continuous improvement. I thrive on challenges and am always eager to learn and innovate.
        </p>
        <br className="sm:block hidden" />
  
        <p className="text-lg text-white font-semibold">
          Feel free to explore my <span className="text-[#915EFF]">Projects, Certifications, and Experiences</span>.
        </p>
      </div>
      </div>


     
    </>
  )
}

export default SectionWrapper(About, "about")