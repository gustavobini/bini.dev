import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Page } from './main';
import { theme } from './theme';

const Wrapper = props => (
  <main style={{ padding: '20px', backgroundColor: 'tomato' }} {...props} />
);

const MyH1 = props => <h1 style={ theme.title } {...props} />;
const MyParagraph = props => (
  <p style={theme.text} {...props} />
);
const components = {
  h1: MyH1,
  p: MyParagraph,
  wrapper: Wrapper,
  pre: props => <pre style={{color:  '#f5f5f5', overflowX: 'auto', backgroundColor: '#666', padding: '1rem', borderRadius: '4px'}}>{props.children}</pre>
};

export function Post({ children }) {
  return (
    <>
      <Page />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  );
}
