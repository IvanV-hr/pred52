import { useState } from "react";
import PotvrdniOkvir from "./PotvrdniOkvir";

const Izleti = ({ izleti }) => {
  const [samoUzMore, setSamoUzMore] = useState(false);
  const [samoBesplatni, setSamoBesplatni] = useState(false);
  const [sakrijPosjecene, setSakrijPosjecene] = useState(false);

  const filtriraniIzleti = izleti.filter((izlet) => {
    if (samoUzMore && izlet.uzMore !== true) {
      return false;
    }

    if (samoBesplatni && izlet.cijena !== 0) {
      return false;
    }

    if (sakrijPosjecene && izlet.posjecen === true) {
      return false;
    }

    return true;
  });

  return (
    <section className="section">
      <h2>Popis izleta</h2>
      <div className="filteri">
        <PotvrdniOkvir
          oznaka="Samo uz more"
          ukljucen={samoUzMore}
          onPromjena={setSamoUzMore}
        />
        <PotvrdniOkvir
          oznaka="Samo besplatni"
          ukljucen={samoBesplatni}
          onPromjena={setSamoBesplatni}
        />
        <PotvrdniOkvir
          oznaka="Sakrij posjecene"
          ukljucen={sakrijPosjecene}
          onPromjena={setSakrijPosjecene}
        />
      </div>
       <p>Prikazano izleta: {filtriraniIzleti.length} od {izleti.length}</p>
      {filtriraniIzleti.length === 0 && <p>Nema izleta za prikaz.</p>}
      <ul>
        {filtriraniIzleti.map((izlet) => (
          <li key={izlet.id}>{izlet.naziv}</li>
        ))}
      </ul>
    </section>
  );
};

export default Izleti;
