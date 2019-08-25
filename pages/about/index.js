import React from 'react';

import { Page } from '../../src/layout/main';
import { Nav } from '../../src/components/nav';

export default () => (
  <div>
    <Page />
    <Nav />
    <h1>hi</h1>
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
