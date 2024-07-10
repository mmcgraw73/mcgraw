// components/Nav.tsx
import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.css'; // Import the CSS module 


const Nav = () => {
  return (
    <nav style={{ position: 'sticky', top: 20, zIndex: 1000 }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link href="/" className={styles.navLink}>
            home
          </Link>
        </li>
        <li>
          <Link href="/work" className={styles.navLink}>
            work
          </Link>
        </li>
        <li>
          <Link href="/more" className={styles.navLink}>
            more
          </Link>
        </li>
        <li>
          <Link href="https://github.com/mmcgraw73/mcgraw" className={styles.navLink}>
            github
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Nav;
