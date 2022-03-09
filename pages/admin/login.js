import { useState, useEffect} from "react"
import firebase from "../../components/firebase"

const Login = () => {
  const initalState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
    console.log(value);
  };
  const saveNewUser = async (e) => {
    e.preventDefault();
    if (state.email === "") {
      Swal.fire("Porfavor ingresa un email.");
    } else {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(state.email, state.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
          });
        let urlCurso = findGetParameter("curso");
        if (urlCurso === "usuario") {
          window.location.href = "/usuario";
        } else {
          window.location.href = "/seleccionar-asiento/" + urlCurso;
        }
      } catch (error) {
        var errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          Swal.fire(
            "El formato de la dirección de correo electrónico no es valido."
          );
        } else if (errorCode == "auth/user-not-found") {
          Swal.fire(
            "No hay ningún registro de usuario que corresponda a este correo."
          );
        } else if (errorCode == "auth/wrong-password") {
          Swal.fire("La contraseña ingresada es incorrecta.");
        } else if (errorCode == "auth/too-many-requests") {
          Swal.fire(
            "Ingresaste de manera incorrecta tu contraseña varias veces, intenta más tarde."
          );
        } else if (errorCode == "auth/network-request-failed") {
          Swal.fire("Se perdió su conexión a internet, por favor verifique.");
        }
        console.log(errorCode);
      }
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var user = firebase.auth().currentUser;
        if (user != null || user.uid != "error") {
          window.location.href = "/admin";
        }
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={(value) =>
                      handleChangeText(value.target.value, "email")
                    }
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                  onChange={(value) =>
                    handleChangeText(value.target.value, "password")
                  }
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                 onClick={(e) => saveNewUser(e)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.layout = "L2";
export default Login;
