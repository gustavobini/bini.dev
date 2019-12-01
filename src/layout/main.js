import React from 'react';
import Head from 'next/head';

function createTitle(title) {
  return `bini.dev${title ? ' | ' + title : ''}`;
}

export function Page({ pageTitle = '' }) {
  return (
    <>
      <Head>
        <title>{createTitle(pageTitle)}</title>
      </Head>
      <style jsx global>
        {`
          html {
            font-family: monospace;
            font-size: 16px;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            padding: 1rem;
            background-color: #fff;
            color: #666;
          }

          body > div {
            max-width: 800px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}
