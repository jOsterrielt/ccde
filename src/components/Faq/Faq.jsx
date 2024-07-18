import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        ¿Cómo sé cuánta potencia tiene mi aparato?
      </h2>{" "}
      <p className={styles.paragraph}>
        Para saber cuánta potencia tiene tu aparato, revisa la etiqueta o el
        manual del fabricante donde generalmente se indica la potencia en watts
        (W).
      </p>{" "}
      <h2 className={styles.title}>¿Cómo puedo saber el precio del kW/h?</h2>{" "}
      <p className={styles.paragraph}>
        El precio del kW/h lo puedes encontrar en tu factura de electricidad o
        buscando en <a href="https://www.google.com/">Google</a>{" "}
        {`"Precio Kwh + Nombre de tu proveedor de luz"`} y lo encontraras
        facilmente.
      </p>{" "}
      <h2 className={styles.title}>
        ¿Cómo se calcula el gasto total de un indoor?
      </h2>
      <p className={styles.paragraph}>
        {" "}
        El gasto total de un indoor se calcula sumando la potencia de todos los
        aparatos (en watts), dividiendo por 1000 para convertirlo a kilowatts, y
        multiplicando por las horas de uso diario, los días de uso y el precio
        del kW/h.
      </p>{" "}
      <h2 className={styles.title}>¿Cómo se mide el gasto de un indoor? </h2>
      <p className={styles.paragraph}>
        El gasto de un indoor se mide sumando la potencia de todos los aparatos
        y calculando el consumo total de energía en kilowatts hora (kWh).
      </p>
    </div>
  );
};

export default Faq;
