import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Appbar } from "./components/Appbar";
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Appbar></Appbar>
    <Component {...pageProps} />
  </div>;
}
