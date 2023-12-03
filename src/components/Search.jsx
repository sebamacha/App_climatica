import React, { useState } from "react";

function Search({ newLocation }) {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    {
      /** por medio del props a newlocation le pasamos el props */
    }
    newLocation(city);
  };

  return (
    <>
      <form className='mt-4 mb-4' onSubmit={onSubmit}>
        <label
          htmlFor='default-search'
          className='mx-3.5  text-gray-900 sr-only dark:text-white'>
          Search
        </label>
        <div className='relative max-w-3xl mx-3.5 '>
          <input
            type='text'
            onChange={(e) => setCity(e.target.value)}
            id='default-search'
            className='block w-full p-4 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Ciudad'
            required
          />
          <button
            type='submit'
            className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Buscar
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
