import { useState, useEffect } from "react";
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
     let nameReal =  "key"+count; 
    setInfoUser({ ...infoUser, [nameReal]: text });
  };

  const handdleWhatsApp = (text) => {
    let arrayAux = findGetParameter("firma");
    activeCursos[arrayAux].keys = infoUser
    const cursoRef = firebase.firestore().collection("registros").doc("registros");
    cursoRef.update({ usuario: activeCursos }).then(() => {window.location.href = "/"});
  };

  const Increment = () => {
    document.getElementById("keyInput").value = " "
    if(count === 10){
        handdleWhatsApp()
    }
    setCount(count + 1);      
  }
  return (
    <div className="w-8/12 mx-auto flex h-screen justify-center items-center">
      <div>
      <img src="./carrusel2.jpg" className="mx-auto mb-5"/>

        <h1 className="text-3xl font-bold">
          Ingrese la información en el texto para que avance
        </h1>
        <p className="text-center font-bold text-indigo-500 text-2xl">{count * 10}%</p>
        <div className="flex flex-col mt-3 lg:w-6/12">
          <p className="mt-2 mb-1">Sincronización</p>
          <input className="border p-2" id="keyInput" placeholder="Texto.." onChange={(e) => CreateUser(count, e.target.value)}/>
        </div>
        <button onClick={(e) => Increment()}className="mt-5 bg-gray-200 p-2 border border-gray-600 font-semibold text-xl w-2/12 text-center">
            Siguiente
        </button>
      </div>
    </div>
  );
};
ConfigurarFirma.layout = "L2";
export default ConfigurarFirma;
