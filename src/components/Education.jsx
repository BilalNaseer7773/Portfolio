import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description, newline, anotherline}) => (
  <Tilt className='xs:w-[450px] w-full'> {/* Increased width */}
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[400px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[25px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-left text-secondary text-[16px]'>
          {description}
        </p>
        <p className='text-secondary text-[16px] text-center'>
          {newline}
        </p>
        <p className='text-secondary text-[16px] text-center'>
          {anotherline}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Educational Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
         
      </motion.p>
      <div>
        
      </div>

      <div className='mt-20 flex flex-wrap gap-48'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            title={service.title} 
            icon={service.icon} 
            description={service.description} 
            newline={service.newline}
            anotherline={service.anotherline}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Education, "education");