import styles from "./Register.module.scss";
import bgImage from "../../assets/main_back1.png";

const Register = () => {
  return (
    <div
      className={styles.startPage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.register}>
        <header className={styles.header}>
          <nav className={styles.header__menu}>
            <ul className={styles.header__list}>
              <li className={styles.header__elem}><a href="#">Вход</a></li>
              <li className={`${styles.header__elem}, ${styles.header__elem_selected}`}><a href="#">Регистрация</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles.register__content}>
          <div className={styles.register__text}>
            <div className={styles.register__title}>Мы скучали!</div>
            <div className={styles.register__subtitle}>Создайте учётную запись, чтобы войти.</div>
          </div>
          <form action="#">
            <label>
              <input type="text" placeholder="Логин" />
            </label>
            <label>
              <input type="email" placeholder="E-mail" />
            </label>
            <label>
              <input type="password" placeholder="Пароль" />
            </label>
            <label>
              <input type="password" placeholder="Повторите пароль" />
            </label>
            {/* <div>
              <label>
                <input type="checkbox" />
                <span>Запомнить меня</span>
              </label>
              <a href="#">Забыли пароль?</a>
            </div> */}
            <button type="submit">Создать учётную запись</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
