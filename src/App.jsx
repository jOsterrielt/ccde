import { useState } from "react";

import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import Info from "./components/Info/Info";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";
import Links from "./components/Links/Links";

import "./App.css";

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleCalculate = (aparatos) => {
    const detalles = aparatos.map((aparato) => {
      const consumoDiario = (aparato.potencia * aparato.horasDiarias) / 1000;
      const precioDiario = consumoDiario * aparato.tarifa;
      const costoTotal = precioDiario * aparato.diasUso;
      const consumoTotal = consumoDiario * aparato.diasUso;
      return {
        nombre: aparato.nombre,
        costoTotal,
        consumoTotal,
      };
    });

    const costoTotalIndoor = detalles.reduce(
      (total, aparato) => total + aparato.costoTotal,
      0
    );
    const consumoTotalIndoor = detalles.reduce(
      (total, aparato) => total + aparato.consumoTotal,
      0
    );

    setResultado({ detalles, costoTotalIndoor, consumoTotalIndoor });
  };

  return (
    <div className="App">
      <h1>Calculadora de Costo de Electricidad</h1>
      <section className="headerContainer">
        <Info />
      </section>
      <section className="calculatorContainer">
        <div className="formContainer">
          <Form onCalculate={handleCalculate} />
        </div>
        <div className="resultsContainer">
          {resultado ? (
            <Results resultado={resultado} />
          ) : (
            <img src="./results.png" alt="formula" />
          )}
        </div>
      </section>
      <section id="Faq" className="faqContainer">
        <Faq />
        <Video />
      </section>
      <section className="linkContainer">
        <Links />
      </section>
      <Footer />
    </div>
  );
};

export default App;
