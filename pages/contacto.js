import { Widget } from "@typeform/embed-react";
import Head from "next/head";

const Typeform = () => {
  return (
    <div className="">
       <Head>
          <title>Contacto | Innovat</title>
          <meta
            name="description"
            content="Simplifica la administración de tu escuela en México. Más de 25 años como proveedores de software para escuelas y colegios Mexicanos."
          />
        </Head>
      <Widget id="w32VUuxH" className="h-screen" />
    </div>
  );
};

Typeform.layout = "L2";
{/* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/}

export default Typeform;
