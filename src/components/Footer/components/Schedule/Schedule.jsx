import "./Schedule.css";

const days__schedules = [
  { day: "LUNES", time: "08:30 - 19:00" },
  { day: "MARTES", time: "08:30 - 19:00" },
  { day: "MIERCOLES", time: "08:30 - 19:00" },
  { day: "JUEVES", time: "08:30 - 19:00" },
  { day: "VIERNES", time: "08:30 - 19:00" },
  { day: "SABADO", time: "Cerrado" },
  { day: "DOMINGO", time: "Cerrado" },
];

const Schedule = ({ schedules = days__schedules }) => {
  return (
    <div className="container__schedule">
      <h3 className="title__schedule">FabLab Santa Cruz</h3>
      <p className="description__schedule">
        Unifranz, Av Busch, 1113, Santa Cruz de la Sierra, 
        <br /> Santa Cruz, Bolivia
      </p>
      <section className="schedules">
        <h4>Horario</h4>
        <ul className="list__of__days">
          {schedules.map((schedule) => (
            <li className="day__item" key={schedule.day} >
                <p>{schedule.day}</p>
                <p>{schedule.time}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Schedule;
