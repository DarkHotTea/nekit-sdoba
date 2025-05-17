import styles from "./Login.module.scss";
import bgImage from "../../assets/main_back1.png";

const Login = () => {
  return (
    <div
      className={styles.startPage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.login}>
        <header className={styles.header}>
          <nav className={styles.header__menu}>
            <ul className={styles.header__list}>
              <li className={`${styles.header__elem}, ${styles.header__elem_selected}`}><a href="#">Вход</a></li>
              <li className={styles.header__elem}><a href="#">Регистрация</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles.login__content}>
          <div className={styles.login__text}>
            <div className={styles.login__title}>Мы скучали!</div>
            <div className={styles.login__subtitle}>Войдите, чтобы продолжить</div>
          </div>
          <form action="#">
            <label>
              <input type="text" placeholder="Логин" />
            </label>
            <label>
              <input type="password" placeholder="Пароль" />
            </label>
            <div>
              <label>
                <input type="checkbox" />
                <span>Запомнить меня</span>
              </label>
              <a href="#">Забыли пароль?</a>
            </div>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
