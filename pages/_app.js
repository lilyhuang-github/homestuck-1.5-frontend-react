// import "@/styles/globals.css";
import Layout from "@/components/layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
  <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>);
}