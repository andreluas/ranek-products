import foto from "../../assets/images/contato.jpg";
import Head from "../../hooks/Head";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={`${styles.dados}`}>
          <li>email@contato.com</li>
          <li>99999-9999</li>
          <li>Rua Gomes Abrão, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
