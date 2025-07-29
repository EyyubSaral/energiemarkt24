import Footer from "@/components/footer";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import CookieConsent from "@/components/cookie";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <CookieConsent />
    </>
  );
}
