import "@/styles/globals.css";
import type { AppProps } from "next/app";
import  Appbar  from "./components/Appbar";
import { SessionProvider, getSession } from "next-auth/react"
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
export default function App({ Component, pageProps }: AppProps) {

  return <SessionProvider session={pageProps.session}>
    <Appbar></Appbar>
    <Component {...pageProps} />
  </SessionProvider>;
}

