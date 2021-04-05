import React from 'react';
import Link from 'next/link';

import { fetchPosts } from '../src/fetch-posts';
import { Nav } from '../src/components/nav';
import { Page } from '../src/layout/page';

export default (props) => (
  <div>
    <Page />
    <Nav vertical />
    <style jsx>
      {`
        section {
          margin: 32px 0;
        }

        img.author {
          border-radius: 100%;
          width: 120px;
          height: 120px;
          margin-right: 16px;
          shape-outside: ellipse();
          float: left;
        }

        img.media {
          width: 32px;
          height: 32px;
        }

        p {
          line-height: 1.5;
          color: #333;
        }
      `}
    </style>
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
            margin-top: 64px;
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
  </div>
);

export function getStaticProps() {
  const posts = fetchPosts();

  posts.forEach((post) => {
    delete post.Post;
  });

  return {
    props: { posts },
  };
}