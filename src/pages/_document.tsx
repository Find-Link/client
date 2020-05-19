import Document, {
  Html, Head, Main, NextScript, DocumentInitialProps,
} from 'next/document';
import React, { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        </Head>
        <body>
          <Container>
            <Main />
          </Container>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
