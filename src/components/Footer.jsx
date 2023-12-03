import React from "react";
import "../assets/css/footer.css";
import logo from "../assets/img/navbar.webp";

function Footer() {
  return (
    <footer className='bg-black text-white footers '>
      <div className='w-full max-w-screen-xl  p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='https://flowbite.com/'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
            <img src={logo} className='h-8' alt='Flowbite Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Sebastian Macharette
            </span>
          </a>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-1xl font-semibold text-white sm:text-center dark:text-gray-400'>
            © 2023{" "}
            <a
              href='https://www.macharette.com.ar'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'>
              Full Stack™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
