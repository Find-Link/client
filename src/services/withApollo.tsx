import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from 'apollo-upload-client';

export type Client = (state?: any) => ApolloClient<any>;

export const client: Client = (cache = {}) => new ApolloClient({
  link: createUploadLink({ uri: '/graphql' }),
  cache: new InMemoryCache().restore(cache),
});

export default withApollo(
  client as any,
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    ),
  },
);
