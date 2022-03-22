import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

// todo: move it to utils
const isDevEnv = (process.env.NODE_ENV === "development") ? true : false
console.log({ isDevEnv });

export const apolloClient = new ApolloClient({
  uri: `http://${(isDevEnv) ? 'localhost:3000' : 'cause-ukraine-budbi5mr7-avimehenwal.vercel.app'}/api/graphql`,
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
