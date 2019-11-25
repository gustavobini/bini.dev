import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Nav } from '../src/components/nav';
import { Page } from '../src/layout/main';

export default () => (
  <div>
    <Page />
    <Nav vertical />
    <section>
      <img
        className="author"
        src="static/bini.jpeg"
        alt="A picture of the author."
        load="lazy"
      />
      <p>
        <strong>Gustavo Bini</strong> is a software developer from Curitiba,
        Brazil who currently works as a frontend developer. His interests vary
        from cooking to creating user experiments and to functional programming.
      </p>
    </section>
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
  </div>
);
