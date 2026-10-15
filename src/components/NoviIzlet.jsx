import { useState } from "react";
import Button from "./Button";

const NoviIzlet = ({ onDodaj }) => {
  const [nazivIzlet, setNazivIzlet] = useState("");
  const [regija, setRegija] = useState("Dalmacija");
  const [cijena, setCijena] = useState(0);
  const [opis, setOpis] = useState("");
  const [uzMore, setUzMore] = useState(false);
  const [greska, setGreska] = useState("");

  function posalji(e) {
    e.preventDefault();

    const naziv = nazivIzlet.trim();

    if (naziv === "") {
      setGreska("Upisite naziv izleta.");
      return;
    }

    onDodaj({
      id: Date.now(),
      naziv: naziv,
      regija: regija,
      cijena: Number(cijena),
      opis: opis.trim(),
      uzMore: uzMore,
      posjecen: false,
    });

    setNazivIzlet("");
    setCijena(0);
    setOpis("");
    setUzMore(false);
    setGreska("");
  }

  return (
    <section className="section">
      <h2>Novi Izlet</h2>
      <form className="forma" onSubmit={posalji}>
        <label htmlFor="naziv">Naziv Izleta</label>
        <input
          id="naziv"
          type="text"
          value={nazivIzlet}
          onChange={(e) => setNazivIzlet(e.target.value)}
        />
        <label htmlFor="regija">Regija</label>
        <select
          id="regija"
          value={regija}
          onChange={(e) => setRegija(e.target.value)}
        >
          <option>Dalmacija</option>
          <option>Istra</option>
          <option>Kvarner</option>
          <option>Zagorje</option>
          <option>Slavnija</option>
          <option>Lika</option>
        </select>
        <label htmlFor="cijena">Cijena Ulaznice</label>
        <input
          id="cijena"
          type="number"
          value={cijena}
          onChange={(e) => setCijena(e.target.value)}
        />
        <label htmlFor="opis">Opis</label>
        <textarea
          id="opis"
          rows="5"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
        ></textarea>
        <label>
          <input
            type="checkbox"
            checked={uzMore}
            onChange={(e) => setUzMore(e.target.checked)}
          />
          Izlet je uz more
        </label>
        {greska && <p>{greska}</p>}
        <Button type="submit">Dodaj izlet</Button>
      </form>
    </section>
  );
};

export default NoviIzlet;
