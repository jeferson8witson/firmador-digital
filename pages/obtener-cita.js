const ObtenerCita = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1  text-center overflow-hidden">
      <h1 className="text-10xl font-bold text-center ">Cita Digital Costa Rica</h1>
      <img className="w-screen" src="/firma.jpeg" />
      <h1 className="text-4xl max-w-xl text-blue-500 font-bold text-center py-10">
        ES OBLIGATORIO TENER FIRMA DIGITAL, SINO LA TIENES POR FAVOR DEBE
        REGISTRARSE
      </h1>
      <div className="grid lg:grid-cols-2 lg:space-x-10 space-y-5 lg:space-y-0 pb-48 ">
        <div className="w-96 lg:w-120 mx-auto h-96 bg-[url('https://i0.wp.com/firmadordigital.com/firmadordigital/wp-content/uploads/2022/01/20211030_195520.jpg?w=1080&ssl=1')]">
          <div className="h-96 w-96 lg:w-120 mx-auto bg-gray-900 bg-opacity-70 grid content-center">
            <div>
              <h1 className="text-white font-bold">
                {" "}
                Registrarse tu entidad financiera para tu certificado
              </h1>
            
            </div>
            <a href="/firma-digital?firma=true" className=" text-white bg-gray-900 p-4 rounded-3xl my-5 w-8/12 mx-auto font-bold">INGRESAR</a>
          </div>
        </div>
      </div>
      <img className="w-screen" src="/interna1.jpg" />
      <img className="w-screen" src="/interna2.jpg" />

    </main>
  );
};
ObtenerCita.layout = "L2";
export default ObtenerCita;
