import React from "react";
import "./CardMachines.css";
import '@fontsource-variable/onest';

const CardMachines = ({image, title, status}) => {
  return (
    <section className="container__cardmachine">
      <img src={image} alt="Impresora Resina SLA" className="card__image"></img>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <span className="card__status">{status}</span>
    </div>
    </section>
  );
};

export default CardMachines;
