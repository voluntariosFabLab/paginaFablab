import "./WhoWeAre.css";
import img1 from "./images/fablab.jpg";
import img2 from "./images/estudiantes.jpg";
import img3 from "./images/Octavio.jpg";

const CardWhoWeAre = ({ image, title }) => {
  return (
    <section className="section__who__we__are">
      <div className="description__who__we__are">{title}</div>
      <div className="img__who__we__are">
        <img src={image} alt="fablabImg" />
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <>
      <h3 className="title__who__we_are">QUIÉNES SOMOS?</h3>
      <div className="container__who__we__are">
        <CardWhoWeAre
          title="Somos un laboratorio de fabricación,
un lugar para explorar, investigar, aprender y fabricar tus proyectos personales o profesionales. "
          image={img1}
        />
        <CardWhoWeAre
          title="Este servicio se ofrece a todos los públicos, de todas las edades, independientemente del grado de dominio de las herramientas de fabricación digital. "
          image={img2}
        />
        <CardWhoWeAre
          title="Los miembros tienen acceso a herramientas, máquinas, talleres y pueden venir e intercambiar conocimientos, prácticas y proyectos entre sí y con los facilitadores."
          image={img3}
        />
      </div>
    </>
  );
};

export default WhoWeAre;
