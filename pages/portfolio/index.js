import Image from "next/image";
import Link from "next/link"
import Layout from "@/components/layout";
import styles from "../../styles/portfolio.module.css";
import { MdOutlineWeb, MdOpenInNew } from "react-icons/md";
import { FaGithub, FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongodb, SiWebpack } from "react-icons/si";

export default function Portfolio() {
  return(
    <Layout>
      <div className={styles.introPort}>
        <h1>Portfolio</h1>
        <p>
        Here&apos;s a smattering of my work! For more projects, check out my
          <Link
            href="https://github.com/inherentspice"
            target="_blank"
          > Github.</Link>
        </p>
      </div>
      <div className={styles.projectsCont}>
        <div className={styles.projectCont}>
          <div className={styles.contHeader}>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "30px" }}
            >
              <MdOutlineWeb />
            </IconContext.Provider>
            <div className={styles.linkHeader}>
              <Link
                href="https://awesomekidsacademy.fly.dev/"
                target="_blank"
                aria-label="Link to AKA website"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <MdOpenInNew />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <h2>Awesome Kids Academy</h2>
          <p className={styles.projDesc}>
            Website for Awesome Kids Academy, an educational company in Shanghai, China, built as a part of my responsibilities as a junior full-stack developer.
            We used React with EmailJS and react-hook-form for form handling, styled-components, and react-router.
            For the photo gallery and admin page, we used an Express backend with MongoDB and Cloudinary to upload, edit, remove, and display images.
          </p>

          <div className={styles.techCont}>
            <div className={styles.techContItem}>
              <small>React</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <FaReact />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>MongoDB</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiMongodb />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>Express</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiExpress />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>NodeJS</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoNodejs />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={styles.projectCont}>
          <div className={styles.contHeader}>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "30px" }}
            >
              <MdOutlineWeb />
            </IconContext.Provider>
            <div className={styles.linkHeader}>
              <Link
                href="https://hig.fly.dev/"
                target="_blank"
                aria-label="Link to hig website"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <MdOpenInNew />
                </IconContext.Provider>
              </Link>
              <Link
                href="https://github.com/inherentspice/Hig"
                target="_blank"
                aria-label="Link to github repo for hig"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <h2>How&apos;s it goin? (hig)</h2>
          <p className={styles.projDesc}>
            Living through lockdowns in Shanghai, and general uncertainty in the world, has given me a pretty bleak outlook.
            Rather than let those feelings paint my world, I made something that would let me get a more objective picture.
            With hig, users&apos; votes combine together to make unique backgrounds and line colors for the beer can.
          </p>
          <div className={styles.techCont}>
            <div className={styles.techContItem}>
              <small>React</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <FaReact />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>MongoDB</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiMongodb />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>Express</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiExpress />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>NodeJS</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoNodejs />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={styles.projectCont}>
          <div className={styles.contHeader}>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "30px" }}
            >
              <MdOutlineWeb />
            </IconContext.Provider>
            <div className={styles.linkHeader}>
              <Link
                href="https://inherentspice.github.io/Restaurant-Page/"
                target="_blank"
                aria-label="Link to AI Restaurant website"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <MdOpenInNew />
                </IconContext.Provider>
              </Link>
              <Link
                href="https://github.com/inherentspice/Restaurant-Page"
                target="_blank"
                aria-label="Link to github repo for AI Restaurant"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <h2>AI Restaurant</h2>
          <p className={styles.projDesc}>
            This project was completed for The Odin Project Javascript Restaurant Page Assignment.
            The aim of the project was to make a functional multi page Restaurant website using WebPack to bundle files.
            All images were generated with stable diffusion.
          </p>
          <div className={styles.techCont}>
            <div className={styles.techContItem}>
              <small>JavaScript</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoJavascript />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>WebPack</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiWebpack />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>CSS</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoCss3 />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>HTML</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoHtml5 />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={styles.projectCont}>
          <div className={styles.contHeader}>
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "30px" }}
            >
              <MdOutlineWeb />
            </IconContext.Provider>
            <div className={styles.linkHeader}>
              <Link
                href="https://toad-do.fly.dev/"
                target="_blank"
                aria-label="Link to toad-do website"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <MdOpenInNew />
                </IconContext.Provider>
              </Link>
              <Link
                href="https://github.com/inherentspice/todo-list"
                target="_blank"
                aria-label="Link to github repo for toad-do"
              >
                <IconContext.Provider
                  value={{ className: styles.reactIcons, size: "30px" }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <h2>Toad-do</h2>
          <p className={styles.projDesc}>
            A full-stack todo webapp built with... well, all the things below.
            An opportunity to practice adding user authentication on the backend with Passport.js.
            Users can login to their profile and find their list of notes.
            They can add new notes through an input, which they can then edit or delete all notes in their profile.
          </p>
          <div className={styles.techCont}>
            <div className={styles.techContItem}>
              <small>React</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <FaReact />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>MongoDB</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiMongodb />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>Express</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <SiExpress />
              </IconContext.Provider>
            </div>
            <div className={styles.techContItem}>
              <small>NodeJS</small>
              <IconContext.Provider
                value={{ className: styles.reactIcons, size: "20px"}}
              >
                <IoLogoNodejs />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
