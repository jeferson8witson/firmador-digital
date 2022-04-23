import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import firebase from "../../components/firebase";
const navigation = [{ name: "Registros", href: "/admin", current: true }];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
const List = () => {
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user) {
            console.log("hola")
        } 
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
            var user = firebase.auth().currentUser;
            if (user != null || user.uid != "error") {
              console.log("hola")
            }
            
          }
          else{
            window.location.href = "/admin/login"
          }
        });
      }, []);
      const [activeCursos, setActiveCursos] = useState([]);
  
    useEffect(() => {

        let index = findGetParameter("usuario");
        const cursosRef = firebase
        .firestore()
        .collection("registros")
        .doc("registros");
      cursosRef.get().then(doc => {
        setActiveCursos((doc.data().usuario[index].keys))
       
      });
    }, []);
  return (
    <div>
      <Disclosure as="nav" className="bg-white shadow-sm">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <button onClick={(e) => firebase.auth().signOut()}>
                      Cerrar sesión
                    </button>
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <button onClick={(e) => firebase.auth().signOut()}>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <nav className="h-[60vh] overflow-y-auto w-11/12 xl:w-7/12 mx-auto my-10 border" aria-label="Directory">
      {
      activeCursos == null ? <p className="text-center my-10">Este usuario no tiene registros</p> :
      Object.keys(activeCursos).map((letter) => (
        <div key={letter} className="relative">
          <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-blue-100 px-6 py-1 text-sm text-gray-900 font-bold">
            <h3>{letter}</h3>
          </div>
          <ul role="list" className="relative z-0 divide-y divide-gray-200">
        
              <li key={letter} className="bg-white">
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <div className="flex-1 min-w-0">
                   
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">{activeCursos[letter]}</p>
                  </div>
                </div>
              </li>
          </ul>
        </div>
      ))}
      </nav>
    </div>
  );
};
List.layout = "L2";
export default List;
