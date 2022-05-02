import { useState, useEffect } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import firebase from "../components/firebase";
function findGetParameter(url) {
  var result = null,
    tmp = [];
  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === url) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

const FirmaDigital = () => {

  const handdleWhatsApp = (text) => {
    window.location.href = "/configurar-firma?firma=" + findGetParameter("firma");
  };
 
  return (
    <div>
      <main className="lg:w-8/12 mx-auto items-center justify-center  flex-1 mt-20 ">
        <img src="./carrusel1.jpg" className="mx-auto mb-5" />
        <h1 className="text-4xl lg:text-10xl font-bold text-center uppercase">
         Solicitud de cita
        </h1>
      </main>
      <div className="w-11/12 lg:w-5/12 mx-auto bg">
        <div className="mt-10 flex flex-col"> 
       
          <div className="flex flex-col mt-1 space-y-2">
            <label>Tipo de identificación</label>
            <select
              id="wpforms-388-field_4"
              className="border py-1 px-2w-full  border-gray-900 py-1 px-2"
              name="wpforms[fields][4]"
              required="required"
              aria-invalid="false"
            >
              <option value="- Seleccionar -">- Seleccionar -</option>
              <option value="Banco Nacional">Identidad nacional</option>
              <option value="Banco de Costa Rica">Cédula Jurídica</option>
              <option value="Banco Popular">Cédula de Residencia</option>
           
            </select>
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Número de identificación</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Nombre</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Primer apellido</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Segundo apellido</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Correo electrónico</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Segundo apellido</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Teléfono celular</p>
            <input
              className="border py-1 px-2"
              type="password"
              onChange={(e) => CreateUser("password", e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Provincia</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Cantón</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex flex-col mt-1 ">
            <p className="mt-2 mb-1">Distrito</p>
            <input
              className="border py-1 px-2"
            />
          </div>
          <div className="flex mt-1">
            <input type="checkbox" />
            <p className="-mt-1.5 ml-2">
              He leído y acepto los términos y condiciones del aviso legal y la
              política de privacidad
            </p>
          </div>
          <button
            onClick={(e) => handdleWhatsApp()}
            className="mt-5 bg-gray-200  border py-1 px-2border-gray-800 font-bold text-xl lg:w-2/12 text-center"
          >
            Ingresar
          </button>
        </div>
      </div>
      <img className="w-screen mt-20" src="/firma1.jpg" />
      <img className="w-screen mt-20" src="/firma2.jpg" />
    </div>
  );
};

FirmaDigital.layout = "L2";

export default FirmaDigital;
