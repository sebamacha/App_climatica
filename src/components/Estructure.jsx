import "../assets/css/estructure.css";
import OpenWathers from "./OpenWathers";
import Search from "./Search";
function Estructure() {
  return (
    <div className=''>
      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        <Search />
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <OpenWathers />
        </div>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <OpenWathers />
        </div>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <OpenWathers />
        </div>
      </div>
      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </div>
    </div>
  );
}

export default Estructure;
