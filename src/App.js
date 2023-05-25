import logo from "./img/Mercado-Pago-Logo.png";

function App() {
  return (
    <div>
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
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
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
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Mercado Pago
          </h5>
          <div>
            <h1 className="w-12">Email:</h1>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="cosa"
              id="cosa"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="1234 1234 1234 1234"
              required
            />
          </div>
          <div className="flex">
            <div className="mr-2">
              <input
                type="text"
                className="bg-gray-50 border w-full md:w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-50 border ml-4 md:ml-1 sm:ml-0 border-gray-300 text-gray-900 text-sm rounded-lg sm:w-full md:w-[200px] focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="***"
              />
            </div>
          </div>
          <div>
            <h1 className="w-12">Nombre&nbsp;en&nbsp;la&nbsp;tarjeta:</h1>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <h1 className="w-12">Cuotas&nbsp;sin&nbsp;interés</h1>
            <input
              type="text"
              name="cosa"
              id="cosa"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="1234 1234 1234 1234"
              required
            />
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
    </div>
  );
}

export default App;
