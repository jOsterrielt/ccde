import styles from "./Links.module.css";
const Links = () => {
  return (
    <section className={styles.container}>
      <h2>Enlaces utiles</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="https://www.youtube.com/watch?v=JZydetiEHY8&t=619s">
            Consumo electrico en indoor. (Video)
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://houseofweed.cl/blogs/cultivo/calcular-costo-luz-cultivo-indoor">
            ¿Cuanta luz gasta un indoor?(Articulo)
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://houseofweed.cl/blogs/cultivo/fotoperiodo-marihuana">
            ¿Cuántas horas de luz necesita una planta?(Articulo)
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://indoorplanner.vercel.app/">
            Calcula la cantidad de macetas que entran en tu indoor.
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;
