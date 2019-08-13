import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/gustavobini">GitHub</a>
      </li>
    </ul>
  </nav>
);
