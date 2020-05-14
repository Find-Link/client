import React, { ReactElement } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';

function MyApp({ Component, pageProps }): ReactElement {
  return (
    <>
      <Head>
        <title>Top Links</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
