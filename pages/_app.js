import WebProvider from "@/context/WebProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WebProvider>
      <Component {...pageProps} />
    </WebProvider>
  );
}
