import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Nav } from '../src/components/nav';
import { Page } from '../src/layout/main';

export default () => (
  <div>
    <Page />
    <Nav vertical />
  </div>
);
