import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const livepeerClient = createReactClient( {
  provider: studioProvider( {
    apiKey: process.env.LIVEPEER_API
  })
})

 const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LivepeerConfig client={livepeerClient}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </LivepeerConfig>
    </>
  );
}
