import "./Slider.css";
import inauguracion from "../../assets/inauguracion.jpg";

const Slider = () => {
  return (
    <div className="container__slider">
      <img src={inauguracion} alt="imgInauguracion" className="img__slider" />
      <section className="info__slider">
        <h2 className="title__slider">INAUGURADA EL 18 DE AGOSTO DEL 2023</h2>
        <p className="text__slider">1er FabLab en Bolivia / Santa Cruz</p>
        <p className="description__slider">
          Inauguración de el FabLab Santa Cruz, un centro de investigación,
          producción digital y educación para brindar oportunidades de acceso a
          entornos, habilidades y herramientas tecnológicas, en un ecosistema
          digital donde se promueve el espíritu creador boliviano.
        </p>
      </section>
    </div>
  );
};

export default Slider;
