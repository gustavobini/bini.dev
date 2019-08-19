import React from 'react';

import { Page } from '../../src/layout/main';
import { Nav } from '../../src/components/nav';

export default () => (
  <div>
    <Page />
    <Nav />
    <article>{/* <h1>Gustavo Bini</h1> */}</article>
    <section>
      <img
        src="static/bini.jpeg"
        alt="A picture of the author of this website."
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

        img {
          border-radius: 100%;
          width: 120px;
          height: 120px;
          margin-right: 16px;
          shape-outside: ellipse();
          float: left;
        }

        p {
          line-height: 1.5;
          color: #333;
        }
      `}
    </style>
  </div>
);
