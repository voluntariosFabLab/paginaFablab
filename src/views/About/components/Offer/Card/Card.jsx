import "./Card.css";
// Supports weights 100-900
import '@fontsource-variable/onest';
const Card = ({ icon, title, description, colorCard = "#f00" }) => {
  return (
    <div className="card-offer-container-about">
      <div className="bg-card-offer">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <h3 className="title__offer__about">{title}</h3>
        <p className="description__offer__about">{description}</p>
      </div>
      <div className="blob" style={{ "--color": colorCard }}></div>
    </div>
  );
};

export default Card;
