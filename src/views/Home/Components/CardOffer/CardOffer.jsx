import "./CardOffer.css";

const CardOffer = ({
  image,
  title = "IMPRESIÓN 3D",
  description = "Proceso FDM y SLA / varios colores / PLA, PET-G, ABS, Resina",
  bg_color = "#5CABBE22",
}) => {
  return (
    <div className="container__cardoffer">
      <section className="cardoffer">
        <img src={image} alt="img__offer" className="img__offer" />
        <div className="cardoffer__text">
          <h3 className="cardoffer__title">{title}</h3>
          <p className="cardoffer__description">{description} </p>
        </div>
      </section>
      <span className="circle__card" style={{ "--bg_color": bg_color }} ></span>
    </div>
  );
};

export default CardOffer;
