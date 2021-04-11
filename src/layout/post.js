import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'

import { Page } from './page';

import styles from './post.module.css';


const Code =  ({children, className}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const Wrapper = (props) => <main className={styles.wrapper} {...props} />;

const MyH1 = (props) => <h1 className={styles.title} {...props} />;

const MyParagraph = (props) => <p className={styles.text} {...props} />;

const components = {
  h1: MyH1,
  p: MyParagraph,
  wrapper: Wrapper,
  pre: props => <div {...props}/>,
  code: Code,
};

export function Post({ children }) {
  return (
    <>
      <Page />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  );
}
