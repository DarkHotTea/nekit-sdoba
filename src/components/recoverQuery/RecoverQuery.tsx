import styles from "./RecoverQuery.module.scss";
import bgImage from "../../assets/main_back1.png";

const RecoverQuery = () => {
  return (
    <div
      className={styles.startPage}
      style={{ backgroundImage: `url(${bgImage})`, backdropFilter: "blur(888px)" }}
    >
      <div className={styles.recoverQuery}>        
        <div className={styles.recoverQuery__content}>
          <div className={styles.recoverQuery__text}>
            <div className={styles.recoverQuery__title}>Восстановление<br />пароля</div>
          </div>
          <form action="#">
            <label>
              <input type="text" placeholder="Логин" />
            </label>
            <label>
              <input type="email" placeholder="E-mail" />
            </label>
            <button type="submit">Получить доступ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverQuery;
