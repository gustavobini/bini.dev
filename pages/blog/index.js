import React from 'react';
import Link from 'next/link';

import { fetchPosts } from '../../src/fetch-posts';
import { Page } from '../../src/layout/page';
import { Nav } from '../../src/components/nav';

export default function Blog(props) {
  return (
    <>
      <Page pageTitle="blog" />
      <Nav />
      <section>
        <ol>
          {props.posts.map((post, index) => (
            <li key={index}>
              <Link href={`/blog/${post.url}`}>
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
            color: #1976d2;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 900;
          }
        `}
      </style>
    </>
  );
}

export function getStaticProps() {
  const posts = fetchPosts();

  posts.forEach((post) => {
    delete post.Post;
  });

  return {
    props: { posts },
  };
}
