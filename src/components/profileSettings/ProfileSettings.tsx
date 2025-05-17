import MainPage from "../mainPage/MainPage";
import UserInfo from "../userInfo/UserInfo";
import styles from "./ProfileSettings.module.scss";
import Exit from "../../assets/icons/Leave.svg"

const ProfileSettings = () => {
  return (
    <MainPage>
      <div className={styles.profileSettings}>
        {/* <a href="#" className={styles.subscribeLink}>
        <span>Оформить plus</span>
      </a> */}
        <div className={styles.profileSettings__row}>
          <UserInfo />
          <div className={styles.profileSettings__form}>
            <form className={styles.form} action="#">
              <div className={styles.form__title}>Основная информация</div>
              <div className={styles.form__inputFields}>
                <label className={styles.form__inputField}>
                  <span>Фамилия</span>
                  <input type="text" />
                </label>
                <label className={styles.form__inputField}>
                  <span>Имя</span>
                  <input type="text" />
                </label>
                <label className={styles.form__inputField}>
                  <span>Профессия</span>
                  <input type="text" />
                </label>
                <label className={styles.form__inputField}>
                  <span>Адрес проживания</span>
                  <input type="text" />
                </label>
              </div>
              <div className={styles.form__title}>Обо мне</div>
              <textarea rows={4} >
                Я программист, работаю на заводе, занимаюсь разработкой
                высонагруженных информационных систем, я программист-инженер.
              </textarea>
              <div className={styles.form__buttons}>
                <button>Нет</button>
                <button>Да</button>
              </div>
            </form>
          </div>
          <a href="/login" className={styles.exitLink}><img src={Exit} alt="leave" /></a>
        </div>
      </div>
    </MainPage>
  );
};

export default ProfileSettings;
