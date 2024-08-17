import CardOffer from "./Components/CardOffer/CardOffer";
import "./Home.css";
import biomateriales from "./assets/biomateriales.png";
import cnc from "./assets/cnc.png";
import electronica from "./assets/electronica.png";
import impresora from "./assets/impresora3d.png";
import laser from "./assets/laser.png";
import vr from "./assets/vr.png";

const Home = () => {
  return (
    <div className="home__container">
      <h4 className="offer__title">  Áreas que ofrecemos</h4>
      <ul className="offer__list">
        <li>
          <CardOffer image={impresora} bg_color="#FFADDE" />
        </li>
        <li>
          <CardOffer
            image={cnc}
            title="FRESADORA CNC"
            description="fresadoras CNC de hasta 2450 x 1000 mm / madera, plástico, metal, placas de circuito impreso..."
            bg_color="#19AB6E"
          />
        </li>
        <li>
          <CardOffer
            image={electronica}
            title="PROGRAMACIÓN Y ROBÓTICA"
            description="Componentes electronicos y microcontroladores /Arduino / Esp32/ raspberry pi"
            bg_color="#6366F1"
          />
        </li>
        <li>
          <CardOffer
            image={laser}
            title="CORTADORA LÁSER"
            description="Corte y grabado hasta 1600 x 1000 mm / madera, mdf, cartón, plexiglás, cuero.."
            bg_color="#ECE824"
          />
        </li>
        <li>
          <CardOffer
            image={vr}
            title="REALIDAD VIRTUAL"
            description="Gafas de realidad virtual inmersivas/ meta quest 2 "
            bg_color="#FD98B4"
          />
        </li>
        <li>
          <CardOffer
            image={biomateriales}
            title="BIOMATERIALES"
            description="Materiales biodegradables y 
estructuras resistentes."
            bg_color="#E4334C"
          />
        </li>
      </ul>
    </div>
  );
};

export default Home;
