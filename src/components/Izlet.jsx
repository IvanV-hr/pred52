import Button from "./Button";
import PotvrdniOkvir from "./PotvrdniOkvir";

const Izlet = ({ izlet, onUkloni, onPromjeni }) => {
  return (
    <li className="izlet">
      <div>
        {izlet.naziv}{" "}
        <span className="oznaka-regije">
          {izlet.regija}
          {izlet.uzMore && ", uz more"}
        </span>
        {izlet.cijena === 0 ? "- besplatno" : `- ${izlet.cijena}`}
        {izlet.opis && <p className="izlet-opis">{izlet.opis}</p>}
      </div>
      <div className="izlet-actions">
        <PotvrdniOkvir
          oznaka="Posjeceno"
          ukljucen={izlet.posjecen}
          onPromjena={() => onPromjeni(izlet.id)}
        />
        <Button onClick={() => onUkloni(izlet.id)}>Ukloni</Button>
      </div>
    </li>
  );
};

export default Izlet;
