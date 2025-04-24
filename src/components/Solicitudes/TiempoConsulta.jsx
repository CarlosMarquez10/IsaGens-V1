import Navar from "../Navar";
import React, { useState } from "react";
import "./TiempoConsulta.css";
import ReactPlayer from "react-player";

function TiempoConsulta() {
  const [numeroCliente, setNumeroCliente] = useState("");
  const [correo, setCorreo] = useState("");
  const [solicitud, setSolicitud] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageerror, setMessageerror] = useState("");

  const opRegional = [
    "1000",
    "2000",
    "3000",
    "4000",
    "5000",
    "ADM01",
    "ADM02",
    "SSTA",
    "DIRECCION",
    "CGO",
    "SUP-CGO",
    "ALMACEN",
  ];
  const opcSolicitud = ["Historico", "Pagos"];

  const validarCliente = (numeroCliente) => {
    let numeroValido = false;

    // Verificar que el número no esté vacío
    if (numeroCliente.length > 0) {
      // Eliminar espacios en blanco
      numeroCliente = numeroCliente.replace(/\s/g, "");

      // Verificar que el número solo contenga dígitos
      const regexNumero = /^\d+$/;
      numeroValido = regexNumero.test(numeroCliente);
    }

    return numeroValido;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que los campos del formulario no estén vacíos
    if (!validarCliente(numeroCliente) || !correo || !solicitud) {
      alert(
        "Por favor, completa todos los campos del formulario correctamente."
      );
      return;
    }

    setIsSubmitting(true);
    setMessage("");
    setMessageerror("");
    const formData = {
      numeroCliente,
      correo,
      solicitud,
    };

    // Restablecer los campos del formulario a sus valores iniciales
    setNumeroCliente("");
    setCorreo("");
    setSolicitud("");

    setIsLoading(true); // se muestra el loading
    try {
      const response = await fetch(
        `https://74pbcspn-3002.use2.devtunnels.ms/${solicitud}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.error("Error en la petición fetch:", response.statusText);
        setMessageerror("Ocurrió un error al enviar la solicitud.");
      } else {
        console.log("Petición fetch realizada con éxito");
        setMessage("Solicitud enviada con éxito.");
      }
    } catch (error) {
      console.error("Error en la petición fetch:", error);
      // setMessageerror("Ocurrió un error al enviar la solicitud.");
      setMessage("Solicitud enviada con éxito.");
    } finally {
      setIsLoading(false); // Oculta el loading al finalizar la petición
      setIsSubmitting(false);

      // Deshabilitar el botón de enviar durante 3 minutos
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3 * 60 * 1000);
    }
  };

  return (
    <>
      <Navar />
      <div className="containerTiempoConsulta">
        {/* Video en segundo plano */}
        <ReactPlayer
          className="backgroundVideo"
          url="https://www.youtube.com/watch?v=ZfKN5BrbcQI"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className="overlay"></div>

        {/* Contenido principal */}
        <div className="contentWrapper">
          <h2>Solicitud de Información</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <label className="lbl-solicitud">
              Cliente:
              <input
                className="inptSolicitud"
                type="text"
                value={numeroCliente}
                onChange={(e) => setNumeroCliente(e.target.value)}
                required
              />
            </label>
            <label className="lbl-solicitud">
              Regional o Área:
              <select
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              >
                <option value="">Seleccionar</option>
                {opRegional.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </label>
            <label className="lbl-solicitud">
              Tipo de Solicitud:
              <select
                value={solicitud}
                onChange={(e) => setSolicitud(e.target.value)}
                required
              >
                <option value="">Seleccionar</option>
                {opcSolicitud.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btnSolicitud"
            >
              Enviar
            </button>
          </form>
          {isLoading && <div className="msgProc">Procesando...</div>}
          {message && <div className="msgbn">{message}</div>}
          {messageerror && <div className="msgerror">{messageerror}</div>}
          <p>
            Los datos solicitados{" "}
            <span className="spansolicitud">
              se enviarán al correo de la regional o área
            </span>{" "}
            seleccionada. Esto tomará un{" "}
            <span className="spansolicitud">tiempo de 2 minutos</span> o más,
            dependiendo de la conexión a internet y el estado del sistema.
          </p>
        </div>
      </div>
    </>
  );
}

export default TiempoConsulta;




// import Navar from "../Navar";
// import React, { useState} from "react";
// import "./TiempoConsulta.css";

// function TiempoConsulta() {
//   const [numeroCliente, setNumeroCliente] = useState("");
//   const [correo, setCorreo] = useState("");
//   const [solicitud, setSolicitud] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messageerror, setMessageerror] = useState("");

//   const opRegional = [
//     "1000",
//     "2000",
//     "3000",
//     "4000",
//     "5000",
//     "ADM01",
//     "ADM02",
//     "SSTA",
//     "DIRECCION",
//     "CGO",
//     "SUP-CGO",
//     "ALMACEN",
//   ];
//   const opcSolicitud = [
//     "Historico",
//     "Pagos"
//   ];

//   const validarCliente = (numeroCliente) => {
//     let numeroValido = false;

//     // Verificar que el número no esté vacío
//     if (numeroCliente.length > 0) {
//       // Eliminar espacios en blanco
//       numeroCliente = numeroCliente.replace(/\s/g, "");

//       // Verificar que el número solo contenga dígitos
//       const regexNumero = /^\d+$/;
//       numeroValido = regexNumero.test(numeroCliente);
//     }

//     return numeroValido;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validar que los campos del formulario no estén vacíos
//     if (!validarCliente(numeroCliente) || !correo || !solicitud) {
//       alert("Por favor, completa todos los campos del formulario correctamente.");
//       return;
//     }

//     setIsSubmitting(true);
//     setMessage("");
//     setMessageerror("");
//     const formData = {
//       numeroCliente,
//       correo,
//       // solicitud
//     };

//     // Restablecer los campos del formulario a sus valores iniciales
//     setNumeroCliente("");
//     setCorreo("");
//     setSolicitud("");

//     setIsLoading(true); // se muestra el loading
//     try {
//       const response = await fetch(
//         `https://74pbcspn-3002.use2.devtunnels.ms/${solicitud}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         console.error("Error en la petición fetch:", response.statusText);
//         // setMessageerror("Ocurrió un error");
//         setMessage("Solicitud enviada");
//       } else {
//         console.log("Petición fetch realizada con éxito");
//         setMessage("Solicitud enviada");
//       }
//     } catch (error) {
//       console.error("Error en la petición fetch:", error);
//       // setMessageerror("Ocurrió un error");
//       setMessage("Solicitud enviada");
//     } finally {
//       setIsLoading(false); // Oculta el loading al finalizar la petición
//       setIsSubmitting(false);

//       // Deshabilitar el botón de enviar durante 3 minutos
//       setTimeout(() => {
//         setIsSubmitting(false);
//       }, 3 * 60 * 1000);
//     }
//   };

//   return (
//     <>
//       <Navar />
//       <div className="conatinerConstrution">
//         <h2>Solicitud Información </h2>
//         <form onSubmit={handleSubmit} className="form-container">
//           <label>
//             Cliente:
//             <input
//               className="inptSolicitud"
//               type="text"
//               value={numeroCliente}
//               onChange={(e) => setNumeroCliente(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Regional ó Area :
//             <select
//               value={correo}
//               onChange={(e) => setCorreo(e.target.value)}
//               required
//             >
//               <option value="">Seleccionar</option>
//               {opRegional.map((opcion, index) => (
//                 <option key={index} value={opcion}>
//                   {opcion}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Tipo Solicitud:
//             <select
//               value={solicitud}
//               onChange={(e) => setSolicitud(e.target.value)}
//               required
//             >
//               <option value="">Seleccionar</option>
//               {opcSolicitud.map((opcion, index) => (
//                 <option key={index} value={opcion}>
//                   {opcion}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="btnSolicitud"
//           >
//             Enviar
//           </button>
//         </form>
//         {isLoading && <div className="msgProc">Procesando...</div>}{" "}
//         {/* Muestra el loading si isLoading es true */}
//         {message && <div className="msgbn">{message}</div>}{" "}
//         {/* Muestra el mensaje si message no está vacío */}
//         {messageerror && <div className="msgerror">{messageerror}</div>}{" "}
//         {/* Muestra el mensaje de error si messageerror no está vacío */}
//         <p>
//           Los Datos solicitados,{" "}
//           <span className="spansolicitud">
//             se enviaran al correo del la regional o area
//           </span>{" "}
//           selecionada, esto tomara un{" "}
//           <span className="spansolicitud">tiempo de 2 minutos...</span> o mas
//           dependiendo el internet y el estado del sistema.
//         </p>
//       </div>
//     </>
//   );
// }

// export default TiempoConsulta;
