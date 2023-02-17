import { useState } from 'react';
import hamburgerStyles from "./hamburgerMenu.module.css"
import Link from 'next/link';

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <button className={`${hamburgerStyles.menuButton} ${menuOpen ? hamburgerStyles.menuToggle : ''}`} onClick={handleMenuClick}>
        <span className={hamburgerStyles.menuIcon}></span>
        <p>Menu</p>
      </button>
      <nav className={`${hamburgerStyles.menu} ${menuOpen ? hamburgerStyles.menuOpen : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
