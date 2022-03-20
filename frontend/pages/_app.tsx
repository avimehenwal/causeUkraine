import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';


const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
