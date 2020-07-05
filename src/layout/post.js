import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Page } from './page';

import styles from './post.module.css';

const Wrapper = (props) => <main className={styles.wrapper} {...props} />;

const MyH1 = (props) => <h1 className={styles.title} {...props} />;

const MyParagraph = (props) => <p className={styles.text} {...props} />;

const Pre = (props) => <pre className={styles.pre}>{props.children}</pre>;

const components = {
  h1: MyH1,
  p: MyParagraph,
  wrapper: Wrapper,
  pre: Pre,
};

export function Post({ children }) {
  return (
    <>
      <Page />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  );
}
