import { useState, useEffect } from "react";
import firebase from "../../components/firebase";
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
  ]
  
 const Table = () => {
    const [activeCursos, setActiveCursos] = useState([]);
  
    useEffect(() => {
      const cursosRef = firebase
        .firestore()
        .collection("registros")
        .doc("registros");
      cursosRef.onSnapshot((snapshot) => {
        setActiveCursos(snapshot.data().usuario);
        console.log(snapshot.data().usuario)
      });
    }, []);
    return (
      <div className="flex flex-col">
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
                      Usuario
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contraseña
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Metodo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Entidad
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key1
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key2
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key3
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key4
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key5
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key6
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key7
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key8
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key9
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key10
                    </th>
                  
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key11
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key12
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key13
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key14
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key15
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key16
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key17
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key18
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key19
                    </th> <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Key20
                    </th>
                  


                  </tr>
                </thead>
                <tbody>
                  {activeCursos.map((person, personIdx) => (
                    <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.user}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.password}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.metodo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.entidad}</td>
                      {person.keys ? 
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key2}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key3}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key4}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key5}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key6}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key7}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key8}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key9}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key10}</td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key11}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key12}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key13}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key14}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key15}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key16}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key17}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key18}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key19}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.keys.key20}</td>
                    </>
                    :""}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Table;