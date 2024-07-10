
import Link from 'next/link';
import React from 'react'; 

const Nav = () => {
  return (
    <nav style={{ position: 'sticky', top: 20, zIndex: 1000 }}>
      <ul className="" style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link href="/">
            home
          </Link>
        </li>
        <li>
          <Link href="/work">
            work
          </Link>
        </li>
        <li>
          <Link href="/more">
            more
          </Link>
        </li>
        <li>
          <Link href="https://github.com/mmcgraw73/mcgraw">
            github
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Nav;
