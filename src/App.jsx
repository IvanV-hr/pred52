import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

const pocetniIzleti = [
  {
    id: 1,
    naziv: "Plitvička jezera",
    regija: "Lika",
    uzMore: false,
    cijena: 40,
    opis: "Jezera povezana slapovima i drvenim stazama.",
    posjecen: true,
  },
  {
    id: 2,
    naziv: "Dubrovnik",
    regija: "Dalmacija",
    uzMore: true,
    cijena: 0,
    opis: "Šetnja Stradunom i starom gradskom jezgrom.",
    posjecen: false,
  },
  {
    id: 3,
    naziv: "Rovinj",
    regija: "Istra",
    uzMore: true,
    cijena: 0,
    opis: "Uske kamene ulice i pogled na more s vrha starog grada.",
    posjecen: true,
  },
  {
    id: 4,
    naziv: "Kopački rit",
    regija: "Slavonija",
    uzMore: false,
    cijena: 15,
    opis: "Park prirode s mnogo ptica i vožnjom brodom.",
    posjecen: false,
  },
  {
    id: 5,
    naziv: "Opatija",
    regija: "Kvarner",
    uzMore: true,
    cijena: 0,
    opis: "Šetnica uz obalu i stare vile s parkovima.",
    posjecen: false,
  },
  {
    id: 6,
    naziv: "Trakošćan",
    regija: "Zagorje",
    uzMore: false,
    cijena: 12,
    opis: "Dvorac na brežuljku iznad jezera.",
    posjecen: false,
  },
];

export default function App() {
  return (
    <>
      <Header naslov="Izleti" />
      <main id="glavni-sadrzaj">
        <h1>Plan izleta po Hrvatskoj</h1>
      </main>
      <Footer naslov="Izleti" />
    </>
  );
}
