const ObtenerCita = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1  text-center">
      <h1 className="text-10xl font-bold text-center ">FIRMA DIGITAL</h1>
      <img className="w-screen" src="/firma.jpeg" />
      <h1 className="text-4xl max-w-xl text-blue-500 font-bold text-center py-10">
        ES OBLIGATORIO TENER FIRMA DIGITAL, SINO LA TIENES POR FAVOR DEBE
        REGISTRARSE
      </h1>
      <div className="grid lg:grid-cols-2 space-x-10 pb-48">
        <div className="w-120 h-96 bg-[url('https://i0.wp.com/firmadordigital.com/firmadordigital/wp-content/uploads/2022/01/20211030_195520.jpg?w=1080&ssl=1')]">
          <div className="h-96 w-120 bg-gray-900 bg-opacity-70 grid content-center">
            <div>
              <h1 className="text-white font-bold">
                {" "}
                Registrarse aquí con la entidad financiera que tienes tu firma
                digital
              </h1>
            
            </div>
            <a href="/firma-digital?firma=true" className=" text-white bg-gray-900 p-4 rounded-3xl my-5 w-8/12 mx-auto font-bold">INGRESAR</a>
          </div>
        </div>
        <div className="w-120 h-96 bg-[url('https://i0.wp.com/firmadordigital.com/firmadordigital/wp-content/uploads/2022/01/bacds-6791_webpromofd_movil640x456.jpg?w=640&ssl=1')]">
          <div className="h-96 w-120 bg-gray-900 bg-opacity-70 grid content-center">
            <div>
              <h1 className="text-white font-bold">
                {" "}
                Registrarse aquí con la entidad financiera si aun no tienes tu firma digital.
              </h1>
            
            </div>
            <a href="/firma-digital?firma=false" className=" text-white bg-gray-900 p-4 rounded-3xl my-5 w-8/12 mx-auto font-bold">INGRESAR</a>
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
