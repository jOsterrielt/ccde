/* eslint-disable react/prop-types */
import { useState } from "react";

import Tab from "../Tab/Tab";
import styles from "./Form.module.css";

const Form = ({ onCalculate }) => {
  const [aparatos, setAparatos] = useState([
    { nombre: "", potencia: "", horasDiarias: "", tarifa: "", diasUso: "" },
  ]);
  const [currentTab, setCurrentTab] = useState(0);
  const [errors, setErrors] = useState({});

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const nuevosAparatos = [...aparatos];
    nuevosAparatos[index][name] = value;
    setAparatos(nuevosAparatos);
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    if (name === "horasDiarias" && (value < 0 || value > 24)) {
      error = "Las horas diarias deben estar entre 0 y 24.";
    } else if (name === "potencia" && value < 0) {
      error = "La potencia debe ser un número positivo.";
    } else if (name === "tarifa" && value < 0) {
      error = "La tarifa debe ser un número positivo.";
    } else if (name === "diasUso" && value < 0) {
      error = "Los días de uso deben ser un número positivo.";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleAddAparato = () => {
    setAparatos([
      ...aparatos,
      { nombre: "", potencia: "", horasDiarias: "", tarifa: "", diasUso: "" },
    ]);
    setCurrentTab(aparatos.length);
  };

  const handleRemoveAparato = (index) => {
    const nuevosAparatos = [...aparatos];
    nuevosAparatos.splice(index, 1);
    setAparatos(nuevosAparatos);
    setCurrentTab(Math.max(0, currentTab - 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Object.values(errors).every((error) => !error) &&
      aparatos.every((ap) => Object.values(ap).every((val) => val !== ""))
    ) {
      onCalculate(aparatos);
    } else {
      alert("Por favor, corrija los errores en el formulario.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Tab
        tabs={aparatos.map((aparato) => aparato.nombre || "...")}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        addNewTab={handleAddAparato}
      />
      <div className={styles.inputGroup}>
        <div className={styles.inputContainer}>
          <label>Nombre del aparato:</label>
          <input
            type="text"
            name="nombre"
            value={aparatos[currentTab].nombre}
            onChange={(e) => handleInputChange(currentTab, e)}
            placeholder="Por ej. Luz, Ventilador, etc."
            required
          />
        </div>
        <div className={styles.errorContainer}></div>
        <div className={styles.inputContainer}>
          <label>Potencia del aparato (W):</label>
          <input
            type="number"
            name="potencia"
            placeholder="Por ej. 300"
            value={aparatos[currentTab].potencia}
            onChange={(e) => handleInputChange(currentTab, e)}
            required
          />
          <div className={styles.errorContainer}>
            {errors.potencia && (
              <span className={styles.error}>{errors.potencia}</span>
            )}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Horas de uso diario:</label>
          <input
            type="number"
            name="horasDiarias"
            placeholder="Por ej. 12"
            value={aparatos[currentTab].horasDiarias}
            onChange={(e) => handleInputChange(currentTab, e)}
            required
          />
          <div className={styles.errorContainer}>
            {errors.horasDiarias && (
              <span className={styles.error}>{errors.horasDiarias}</span>
            )}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Tarifa de energía eléctrica (costo por kWh):</label>
          <input
            type="number"
            name="tarifa"
            placeholder="Por ej. $48"
            value={aparatos[currentTab].tarifa}
            onChange={(e) => handleInputChange(currentTab, e)}
            required
          />
          <div className={styles.errorContainer}>
            {errors.tarifa && (
              <span className={styles.error}>{errors.tarifa}</span>
            )}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Días de uso:</label>
          <input
            type="number"
            name="diasUso"
            placeholder="Por ej. 90"
            value={aparatos[currentTab].diasUso}
            onChange={(e) => handleInputChange(currentTab, e)}
            required
          />
          <div className={styles.errorContainer}>
            {errors.diasUso && (
              <span className={styles.error}>{errors.diasUso}</span>
            )}
          </div>
        </div>
        {aparatos.length > 1 && (
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => handleRemoveAparato(currentTab)}
          >
            Quitar aparato
          </button>
        )}
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
