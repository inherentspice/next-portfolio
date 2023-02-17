import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><Link href="https://github.com/inherentspice/VKTest-Django-Frontend">From automated chatbots trained with scraped reddit comments</Link>, to <Link href="https://hig.fly.dev/">depicting our collective mental state on cans of beer </Link>— I flat out love building cool stuff for the web.</p>
      </section>
    </Layout>
  )
}
