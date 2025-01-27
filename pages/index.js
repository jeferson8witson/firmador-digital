import Head from "next/head";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-2 overflow-x-hidden">
      <Head>
        <title>Citas CR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1  text-center ">
        <h1 className="text-10xl font-bold">INICIO</h1>
        <img className="w-screen" src="/index1.jpg" />
        <img className="w-screen" src="/index2.jpg" />
        <img className="w-screen" src="/index3.jpg" />
        <h1 className="text-6xl font-bold">
          PARA PODER REALIZAR EL TRAMITE,
          <br /> PRIMERO DEBE REGISTRARSE
        </h1>
        <a
          href="/servicios"
          className="px-10 py-2 bg-indigo-800 text-white rounded-3xl my-10 text-4xl"
        >
          Registrarse
        </a>
        <a
          href="/servicios"
          className="px-5 py-2 bg-blue-600 text-white rounded-3xl mb-10 text-4xl"
        >
          Protección de Cuenta
        </a>

        <img className="w-screen" src="/index4.jpg" />
        <img className="w-screen" src="/index5.jpg" />
        <img className="w-screen" src="/index6.jpg" />
      </main>
    </div>
  );
};

Home.layout = "L2";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/
}
export default Home;
