import CardVolunter from "./Card/CardVolunter.jsx";
import "./TeamFablab.css";
import { managers } from "./TeamFablabA.js";

const TeamFablab = () => {
  return (
    <div className="container__team__fablab">
      <section className="container__cards">
        <h3 className="title__section__cards">NUESTRO EQUIPO</h3>
        <div>
          {managers.map((manager) => (
            <CardVolunter key={manager.name} user={manager} />
          ))}
        </div>
      </section>
      <section className="container__cards">
        <h3 className="title__section__cards">NUESTROS VOLUNTARIOS</h3>
      </section>
    </div>
  );
};

export default TeamFablab;
