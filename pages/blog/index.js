import React from 'react';
import Link from 'next/link';

import { fetchPosts } from './fetch-posts';
import { Page } from '../../src/layout/main';
import { Nav } from '../../src/components/nav';
import { theme } from '../../src/layout/theme';

export default function Blog(props) {
  return (
    <>
      <Page pageTitle="blog" />
      <Nav />
      <section>
        <ol>
          {props.posts.map((post, index) => (
            <li key={index}>
              <Link href={`/blog/posts/${post.url}`}>
                <a>
                  {post.title} ({post.createdAt})
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <style jsx>
        {`
          section {
            margin-top: 32px;
          }

          ol {
            list-style: none;
          }

          li {
            line-height: 1.5;
            margin: 1rem 0;
          }

          li a {
            color: ${theme.link.color};
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 900;
          }
        `}
      </style>
    </>
  );
}

Blog.getInitialProps = async () => {
  const posts = fetchPosts();

  return {
    posts
  };
};
