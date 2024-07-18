import styles from "./Video.module.css";
const Video = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Descubrí el tipo de luz ideal para tu indoor
      </h2>
      <p className={styles.paragraph}>
        Mirá este video sobre los distintos tipos de luces para cultivo en
        interior. Conocé las ventajas y desventajas de cada opción y después usá
        la calculadora para ver cuánto te costará según la luz que elijas.
      </p>
      <iframe
        width="400"
        height="215"
        src="https://www.youtube.com/embed/W1AplbHoj9s?si=0hy-p0gW-GgsYAPd"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
