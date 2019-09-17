import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Page } from './main';

const Wrapper = props => (
  <main style={{ padding: '20px', backgroundColor: 'tomato' }} {...props} />
);

const MyH1 = props => <h1 style={{ color: 'tomato' }} {...props} />;
const MyParagraph = props => (
  <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />
);
const components = {
  h1: MyH1,
  p: MyParagraph,
  wrapper: Wrapper
};

export function Post({ children }) {
  return (
    <>
      <Page />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  );
}
