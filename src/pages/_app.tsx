import React, { ReactElement } from 'react';
import Head from 'next/head';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tagsinput/react-tagsinput.css';
import '../scss/index.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }): ReactElement {
  return (
    <>
      <Head>
        <title>Top Links</title>
      </Head>
      <Header />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
