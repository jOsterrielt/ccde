import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Hecho con 💜 por{" "}
        <a href="https://www.linkedin.com/in/jorge-osterrielt/">
          <span>Jporfiado</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
