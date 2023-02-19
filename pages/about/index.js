import Image from "next/image";
import styles from "../../styles/about.module.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs} from "react-icons/io";
import { SiExpress, SiMongodb, SiPython, SiTypescript} from "react-icons/si";
import utilStyles from "../../styles/utils.module.css";
import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout>
      <div className={styles.introAbout}>
        <h1>About</h1>
        <p>
          Hi, I&apos;m Stephen, a front-end developer from Australia, currently based in London, UK.
          Committed to life-long learning, I have a passion for Javascript, React, and all things web development.
          I love reading and writing — with a bachelors and honours in creative writing and literature as proof — as well as stand-up and improv comedy.
          I have spent my entire life learning to engangingly communicate my ideas with others, whether that be on stage as a comedian, or in my writing, or as a teaching assistant at Le Wagon, or when liasing with managers and stakeholders about my work as a front-end developer.
        </p>
        <br/>
        <p>
          I am currently looking for jobs as a front-end developer at companies that value team-work, communication, and continuous learning.
        </p>
      </div>
      <div className={styles.skillsItemsCont}>
        <h2 className={styles.skillTitle}>Skills</h2>
        <div className={styles.skillsCont}>
          <div className={styles.skillCont}>
            <p>React</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <FaReact/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>TypeScript</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <SiTypescript/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>JavaScript</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <IoLogoJavascript/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>HTML</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <IoLogoHtml5/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>CSS</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <IoLogoCss3/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>NodeJS</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <IoLogoNodejs/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>Express</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <SiExpress/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>MongoDB</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <SiMongodb/>
            </IconContext.Provider>
          </div>
          <div className={styles.skillCont}>
            <p>Python</p>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "75px"}}
            >
              <SiPython/>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className={styles.breakOutAbout}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutTextCont}>
              <p className={utilStyles.headingLg}>10+</p>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutTextCont}>
              <p className={utilStyles.headingLg}>1</p>
              <p>Data Science Bootcamp</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutTextCont}>
              <p className={utilStyles.headingLg}>1.4k+</p>
              <p>Github Commits</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutTextCont}>
              <p className={utilStyles.headingLg}>5+</p>
              <p>Weeping Bouts During The Iron Giant</p>
            </div>
          </div>
        </div>
    </Layout>
  )
}
