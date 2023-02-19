import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import utilStyles from '../styles/utils.module.css';
import homeStyles from "../styles/Home.module.css";
import Layout, { siteTitle } from '../components/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={homeStyles.homeLayout}>
      <section className={utilStyles.headingMd}>
        <p>From automated chatbots trained with scraped reddit comments, to depicting our collective mental state on cans of beer — I flat out love building cool stuff for the web.</p>
      </section>
      <div className={homeStyles.socialCont}>
        <Link
          href="https://github.com/inherentspice"
          target="_blank"
          aria-label="Link to github profile"
        >
          <IconContext.Provider
              value={{ className: homeStyles.reactIcons, size: "50px"}}
            >
              <FaGithub/>
            </IconContext.Provider>
        </Link>
        <Link
          href="https://www.linkedin.com/in/stephen-lehane-smith/"
          target="_blank"
          aria-label="Link to linkedin profile"
        >
          <IconContext.Provider
              value={{ className: homeStyles.reactIcons, size: "50px"}}
            >
              <FaLinkedin/>
            </IconContext.Provider>
        </Link>
      </div>
    </div>
    </Layout>
  )
}
