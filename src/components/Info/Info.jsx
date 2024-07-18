import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Esta calculadora te permite estimar de manera sencilla y precisa el
        costo de electricidad de tu cultivo de interior. Solo necesitas ingresar
        la información de los aparatos que utilizas, como su potencia, horas de
        uso diario, días de uso y la tarifa de electricidad. La calculadora
        procesará estos datos para ofrecerte un desglose detallado del costo y
        consumo total, ayudándote a <span>planificar</span> y{" "}
        <span>optimizar</span> el uso de energía en tu indoor.
      </p>
      <p className={styles.paragraph}>
        Abajo encontrarás las respuestas a las preguntas frecuentes para
        ayudarte a entender mejor cómo calcular y gestionar el consumo de
        electricidad en tu cultivo de interior.
      </p>
    </div>
  );
};

export default Info;
