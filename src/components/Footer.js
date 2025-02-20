import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../resources/images/logo1.png";
import ScrollToTopButton from "./ScrollToTopButton";


function Footer({ NavLink, MoreOptionToggle, setMoreOptionToggle }) {

  const location = useLocation();



 

  return (
    <footer className="text-gray-500   bg-white body-font">
      <hr className=" px-4" />
      <div className="min-h-[30vh] container px-5 py-12 mx-auto">
        <div className="flex justify-between flex-wrap md:text-left text-center order-first ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:flex flex-col justify-start items-start hidden">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-md pb-2">
              Our Pages
            </h2>
            <nav className="list-none ">
              {NavLink.map((navlink, i) => {
                if (navlink.name === "More") {
                  return (
                    <details
                      key={i}
                      className="mx-4 relative"
                      open={MoreOptionToggle}
                    >
                      <summary className="  flex justify-start items-center gap-2 cursor-pointer ">
                        <span className="text-center  leading-loose text-gray-500   hover:text-blue-500 hover:transition-colors duration-300 ease-in-out">
                          More
                        </span>
                        {MoreOptionToggle ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        )}
                      </summary>
                      <div className=" left-8 absolute z-50 border min-w-[11vw] min-h-[10vh] bg-gray-50 shadow-sm rounded-lg mt-3 p-2">
                        <ul>
                          {navlink.link.map((val, i) => {
                            for (const key in val) {
                              if (Object.hasOwnProperty.call(val, key)) {
                                return (
                                  <li
                                    key={i}
                                    onClick={() => {
                                      setMoreOptionToggle(!MoreOptionToggle);
                                    }}
                                    className={
                                      key === "Student Corner"
                                        ? " pb-2"
                                        : " "
                                    }
                                  >
                                    <Link
                                      key={i}
                                      to={val[key]}
                                      className={
                                        location.pathname === val[key]
                                          ? "mx-4 whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold pb-2 list-none   text-blue-600"
                                          : " mx-4 whitespace-nowrap text-ellipsis overflow-hidden text-center pb-2 leading-loose hover:text-blue-600"
                                      }
                                    >
                                      {key}
                                    </Link>
                                  </li>
                                );
                              }
                            }
                          })}
                        </ul>
                      </div>
                    </details>
                  );
                } else {
                  return (
                    <li className="" key={i}>
                      <Link
                        key={navlink.id}
                        to={navlink.link}
                        className={
                          location.pathname === navlink.link
                            ? "mx-4 text-base font-bold  pb-2 list-none  hover:text-blue-600 text-blue-600"
                            : " mx-4 text-center pb-2 leading-loose text-gray-500   hover:text-blue-500 hover:transition-colors duration-300 ease-in-out"
                        }
                        target=""
                      >
                        {navlink.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </nav>
          </div>
          {/* <div className="lg:w-1/2 md:w-1/2 w-full px-4 ">
            <Marquee data={notices} />
          </div> */}
          <div className="lg:w-1/4 md:w-1/2 mt-10 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">
              {/* Connect with us */}Ex-cadet Registration
            </h2>
            
              <button
                type="submit"
                className="w-28 tracking-wide font-semibold bg-blue-500 text-gray-100  py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                 Register
              </button>
           
            {/* <p className="text-gray-500 text-sm pt-5 md:text-left text-center">
              Contact us to give feedback
            </p> */}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 min-h-[10vh] overflow-hidden flex justify-center items-center">
        <div className=" p-5 w-full   mx-auto flex items-center sm:flex-row flex-col">
          <Link className="h-full w-1/4 flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
            <img className="scale-150 pt-2 w-16 " src={Logo} alt="logo" />

            {/* <span className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-500 hidden lg:block">G-Campus</span> */}
          </Link>
          <p className="h-full w-1/2 text-lg text-center text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © {Date().slice(10, 15)} Air Wing NCC Indore —
            <a
              href="https://anshima-sharma.netlify.app/"
              className="text-gray-400 ml-1 hover:text-blue-500 font-semibold transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Anshima Sharma
            </a>
          </p>
          <span className="h-full w-1/4 inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-end">
            {/* <a
              className="text-gray-400"
              href="mailto:web.developers.2021.2024@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
            </a> */}
            {/* <a
              className="ml-3 text-gray-400"
              href="https://twitter.com/ASK_DEVELOPERS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a> */}
          </span>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}

export default Footer;
