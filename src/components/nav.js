import React from 'react';
import Link from 'next/link';
import { theme } from '../layout/theme';

export function Nav({ vertical }) {
  return (
    <header>
      <section className="links">
        <a
          href="https://github.com/gustavobini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="media"
            src="static/github-mark.svg"
            alt="GitHub's Octocat logo."
            load="lazy"
            width="32"
            height="32"
          />
        </a>
        <Link href="/">
          <a className="pagename">bini.dev</a>
        </Link>
      </section>
      <nav>
        <ul className={vertical ? 'vertical' : ''}>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          section.links {
            display: flex;
            justify-content: space-between;
          }

          a.pagename {
            font-size: 2rem;

            color: ${theme.title.color};
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
