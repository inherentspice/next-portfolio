import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import HamburgerMenu from './hamburgerMenu';
const ThemeToggle = dynamic(() => import("../components/themeToggle"), {
  ssr: false,
})

export const siteTitle = 'Stephen Lehane Smith Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio Site of Stephen Lehane Smith"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={250}
              width={250}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>Hi, I am <span className={utilStyles.headingBreakout}>Stephen Lehane Smith</span>. Full Stack Engineer Based in London.</h1>
            <HamburgerMenu />
            <ThemeToggle />
          </>
        ) : (
          <div className={styles.altHeader}>
            <HamburgerMenu />
            <ThemeToggle />
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← home</Link>
        </div>
      )}
    </div>
  );
}
