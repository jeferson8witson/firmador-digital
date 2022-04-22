import firebase from "../../components/firebase";
import { useEffect, useState } from "react";

const Usuarios = () => {
  
  const [activeCursos, setActiveCursos] = useState([]);

  useEffect(() => {
    const booksRef = firebase.firestore().collection("ip").doc("register");
    booksRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().ip);
    });
  }, []);
  
  const Autorizar = (index, value) => {
      let ObjecAutorizado = activeCursos;
      ObjecAutorizado[index].allow = value;
      setActiveCursos(ObjecAutorizado)
      firebase
      .firestore()
      .collection("ip")
      .doc("register")
      .update({
        ip: ObjecAutorizado,
      }); // do something after state has updated
  }


  return (
    <div className="flex flex-col w-10/12 mx-auto py-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    IP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ciudad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Region
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coordenadas
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Aprobar
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeCursos.map((person, personIdx) =>
                  personIdx > 0 ? (
                    <tr
                      key={person.email}
                      className={
                        personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.ip}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.loc}
                      </td>
                      <td className="whitespace-nowrap ">
                        {person.allow == 0 ? (
                         
                            <button className="py-2 px-2 bg-blue-500 text-white font-bold rounded" onClick={(e) => Autorizar(personIdx, 1)}>
                              {" "}
                              Aprobar ingreso
                            </button>
                        ) : (
                         
                            <button className="py-2 px-2 bg-red-600 text-white font-bold rounded" onClick={(e) => Autorizar(personIdx, 0)}>
                              {" "}
                              Revocar ingreso
                            </button>
                         
                        )}
                      </td>
                      {person.keys ? <></> : ""}
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Usuarios.layout = "L2";
export default Usuarios;
