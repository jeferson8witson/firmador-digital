import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Layout2 from "../components/Layout2";
import Head from "next/head";
import "../styles/embla.css"

const layouts = {
  L1: Layout,
  L2: Layout2,
};

function MyApp({ Component, pageProps }) {
  let Layout = layouts["L1"];

  if(Component.layout == "L2"){
    Layout = layouts["L2"];
  }

  {/* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
    EJEMPLO: 
    
    Para seleccionar el segundo Layout en Example, antes del export default se debe poner: 
    Example.layout = "L2"

    Para seleccionar el primer layout en Example, no sé declara nada.
*/}
  return (
      <Layout>
        <Head>
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <title>Delta Template | Brandpetrám</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
