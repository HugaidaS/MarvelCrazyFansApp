import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Head>
        <title>Marvel App</title>
        <meta name="description" content="Marvel API app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <footer></footer>
    </QueryClientProvider>
  );
}

export default MyApp;
