import React from 'react';

import { Nav } from '../src/components/nav';
import { Page } from '../src/layout/main';

export default () => (
  <div>
    <Page />
    <Nav />
    <p>hi there 😊</p>
    <p>this is my playground - feel free to look around</p>
    <style jsx>
      {`
        p:first-of-type {
          font-size: 1.4rem;
          margin-top: 32px;
          font-weight: 600;
        }

        p {
          margin-top: 24px;
          line-height: 1.5;
        }
      `}
    </style>
  </div>
);
