import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
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
          <Image
            src="/images/github-mark.svg"
            height={30}
            width={30}
            alt=""
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stephen-lehane-smith/"
          target="_blank"
          aria-label="Link to linkedin profile"
        >
          <Image
            src="/images/linkedin.svg"
            height={30}
            width={30}
            alt=""
          />
        </Link>
      </div>
    </div>
    </Layout>
  )
}
