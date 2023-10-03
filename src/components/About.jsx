import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        {/* Adjust the left margin for more leftward positioning */}
        <img src={icon} alt={title} className="w-16 h-16 object-contain ml-[-50px]" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};





const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
     As an experienced full-stack developer, I hold a master's degree in software engineering from Arizona State University, complemented by a strong undergraduate background in computer science and engineering. With proficiency in Python, Java, and JavaScript, I specialize in front-end frameworks like React and Angular, and back-end technologies such as Spring Boot, Node Express, Django, and Flask, working with both SQL and NoSQL databases. My expertise extends to Docker, Kubernetes, and AWS.

In my current role at Northern Trust Corporation, where I've been working remotely for eight months, I contribute significantly to developing and maintaining an investment management platform. Using Java, Spring, React, and MongoDB, I collaborate closely with DevOps teams for deployment.

Previous experiences include working at Cyient as a full-stack developer, focusing on React for the frontend and Java for the backend. I initiated my career as a Junior Full-stack Developer at Trigyn Technologies, contributing to a project managing patient data using Angular and Java.

Additionally, I've worked on a sponsored capstone project for Whistle Technologies, developing a cross-platform mobile app using React Native, now available in the App Store. My work is deeply rooted in Agile and Scrum methodologies, involving me in the entire software development process—from requirements gathering to wireframing, development, testing, and issue resolution. I bring a collaborative and comprehensive approach to every project, seamlessly working with clients and cross-functional teams.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
