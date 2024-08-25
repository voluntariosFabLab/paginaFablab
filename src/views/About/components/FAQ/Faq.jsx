import { useState } from "react";
import "./Faq.css";
import arrow from "./arrow.svg";
const Dropdown = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="contoiner__dropdown">
      <div className="header__faq" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="question">{title}</h4>
        <img
          src={arrow}
          alt="arrow"
          className={`arrow__faq ${isOpen ? "arrow__faq__active" : ""}`}
        />
      </div>
      <p className={`answer ${isOpen ? "asnwer__active" : ""}`}>{answer}</p>
    </section>
  );
};
const Faq = () => {
  return (
    <div className="container__faq__father">
      <div className="container__faq">
        <h3 className="title__faq">Preguntas frecuentes</h3>
        <Dropdown
          title="Qué es un Fab Lab?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis iure, quaerat tempora, quod fuga sequi repellat ducimus dolore odit quisquam sed aut repellendus animi deserunt obcaecati omnis itaque nam."
        />
        <Dropdown
          title="Qué puedes encontrar en un Fab Lab?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis iure, quaerat tempora, quod fuga sequi repellat ducimus dolore odit quisquam sed aut repellendus animi deserunt obcaecati omnis itaque nam."
        />
        <Dropdown
          title="Qué aporta la red de Fab Labs?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis iure, quaerat tempora, quod fuga sequi repellat ducimus dolore odit quisquam sed aut repellendus animi deserunt obcaecati omnis itaque nam."
        />
        <Dropdown
          title="Quién puede usar un Fab Lab?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis iure, quaerat tempora, quod fuga sequi repellat ducimus dolore odit quisquam sed aut repellendus animi deserunt obcaecati omnis itaque nam."
        />
        <Dropdown
          title="Quién es el propietario de los inventos realizados en un Fab Lab?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis iure, quaerat tempora, quod fuga sequi repellat ducimus dolore odit quisquam sed aut repellendus animi deserunt obcaecati omnis itaque nam."
        />
      </div>
    </div>
  );
};

export default Faq;
