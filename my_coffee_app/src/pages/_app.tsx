import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Appbar } from "./components/Appbar";
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
    <Appbar></Appbar>
    <Component {...pageProps} />
  </SessionProvider>;
}
