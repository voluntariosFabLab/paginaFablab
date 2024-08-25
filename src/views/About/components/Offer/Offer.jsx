import Card from "./Card/Card";
import "./Offer.css";
import teacher from "./Icons/teacher.svg";
import wrench from "./Icons/wrench.svg";
import hand from "./Icons/agreementHand.svg";
import product from "./Icons/productDesing.svg";
import conversation from "./Icons/conversation.svg";
import search from "./Icons/search-alt.svg";
const Offer = () => {
  return (
    <div className="offer__grid__about__container">
      <h3 className="what__we__offer__about">QUÉ OFRECEMOS ? </h3>
      <div className="offer__grid__about__containe__child">
        <Card
          icon={teacher}
          title="CURSOS"
          description="Los cursos de FabLab te ofrecen equipos de última generación, instalaciones y conferencias de la industria, universidades y empresas consultoras, con enseñanza sobre temas relevantes hoy en día y mañana."
          colorCard="#FFADDE"
        />
        <Card
          icon={wrench}
          title="PROTOTIPOS"
          description="El prototipado es un proceso en el que los equipos experimentan y dan vida a sus ideas. Un prototipo es una muestra inicial de un diseño que permite a los usuarios visualizar el producto antes de su desarrollo final."
          colorCard="#19AB6E"
        />
        <Card
          icon={hand}
          title="COOPERACIÓN CON LA INDUSTRIA"
          description="Actividades entre empresas, industrias o asociaciones industriales de diferentes países que ofrecen beneficios comunes para ambas partes."
          colorCard="#6366F1"
        />
        <Card
          icon={product}
          title="DISEÑO DE PRODUCTO"
          description="El proceso de imaginar, crear y mejorar productos que resuelven problemas de los usuarios o satisfacen necesidades específicas en un mercado determinado."
          colorCard="#ECE824"
        />
        <Card
          icon={conversation}
          title="CONSULTAS / EXPERIENCIA"
          description="Un profesional con experiencia te ayudará, apoyará, asesorará y guiará. Se tomarán el tiempo para conocerte y entender los desafíos que enfrentas."
          colorCard="#FD98B4"
        />
        <Card
          icon={search}
          title="INVESTIGACIÓN"
          description="La creación de nuevos conocimientos y/o el uso de conocimientos existentes de manera innovadora y creativa para generar nuevos conceptos, metodologías y soluciones."
          colorCard="#E4334C"
        />{" "}
      </div>
    </div>
  );
};

export default Offer;
