import styles from "./RecoverSuccess.module.scss";
import bgImage from "../../assets/main_back1.png";

const RecoverSuccess = () => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.startPage}>
        <div className={styles.recoverQuery}>
          <div className={styles.recoverQuery__content}>
            <div className={styles.recoverQuery__title}>Отлично!</div>
            <p className={styles.recoverQuery__text}>
              На ваш E-Mail были отправлены инструкции по восстановлению доступа
            </p>
            <a className={styles.recoverQuery__link} href="#">
              Хорошо
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverSuccess;
