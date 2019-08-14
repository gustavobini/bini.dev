import React from 'react';
import Head from 'next/head';

export function Page({ pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
            padding: 12px;
            min-height: 100vh;
            background-color: #f5f5f5;
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
