import React from "react";
import logo from "../assets/img/navbar.webp";

function Navbar() {
  return (
    <nav className='bg-black border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='https://flowbite.com/'
          className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={logo} className='h-8' alt='Flowbite Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            Consulta estado Tiempo
          </span>
        </a>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  bg-black'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'></a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'></a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'></a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
