import React from 'react';
import Link from 'next/link';

export function Nav({ vertical }) {
  return (
    <header>
      <Link href="/">
        <a className="pagename">bini.dev</a>
      </Link>
      <nav>
        <ul className={vertical ? 'vertical' : ''}>
          <li>
            <a
              href="https://github.com/gustavobini"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
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
      </nav>
      <style jsx>
        {`
          a.pagename {
            display: block;
            font-size: 2rem;

            color: #ff5722;
            text-align: right;
            text-decoration: none;
          }

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

          ul.vertical {
            flex-direction: column;
            align-items: flex-end;
          }

          ul.vertical li {
            margin-bottom: 16px;
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
    </header>
  );
}
