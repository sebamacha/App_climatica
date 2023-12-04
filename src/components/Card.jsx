import React from "react";
import Spinner from "./Spinner";

function Card({ loadingData, showData, wather, forecast }) {
  if (loadingData) {
    return <Spinner />;
  }

  return (
    <div>
      {/* show data decide que es lo ue tiene que mostrar  */}
      {showData === true ? (
        <div className='container'>
          <div className='card mb-3 mx-auto bg-dark text-light'></div>

          <div className='row g-0'>
            <div className='col-md-4'></div>
            <div className='col-md-8'>
              <div className='card-body text-start mt-2'></div>
            </div>
          </div>
        </div>
      ) : (
        <h1>sin datos disponibles o no se encuentro la ciudad </h1>
      )}
    </div>
  );
}

export default Card;
