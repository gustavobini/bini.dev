import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <a href="https://github.com/gustavobini">github</a>
      </li>
      <li>
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        nav {
          margin-top: 16px;
        }

        ul {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin: 0 auto;
          min-width: 200px;
          max-width: 800px;
        }

        li {
          font-size: 1.2rem;
          list-style: none;
        }

        li:not(:first-of-type) {
          margin-left: 16px;
        }

        a {
          color: #3f51b5;
          font-weight: 900;
        }
      `}
    </style>
  </nav>
);
