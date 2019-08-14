import React from 'react';

import Nav from '../src/components/nav';
import { Page } from '../src/layout/main';

export default () => (
  <div>
    <Page />
    <h1>bini.dev</h1>
    <Nav />
    <p>hi there 😊</p>
    <p>this is my playground - feel free to look around</p>
    <p>if you wanna get in touch, contact me @gustavobini on twitter</p>
    <style jsx>
      {`
        h1 {
          font-size: 2rem;
          color: #ff5722;
          text-align: right;
        }

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
