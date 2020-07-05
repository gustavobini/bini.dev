import React from 'react';
import Head from 'next/head';

function createTitle(title) {
  return `bini.dev${title ? ' | ' + title : ''}`;
}

export function Page({ pageTitle = '' }) {
  return (
    <Head>
      <title>{createTitle(pageTitle)}</title>
    </Head>
  );
}
