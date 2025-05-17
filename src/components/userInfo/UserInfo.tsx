import styles from "./UserInfo.module.scss";
import Avatar from "../../assets/ava.jpg";

const UserInfo = () => {
  return (
    <div className={styles.data}>
      <div className={styles.data__title}>Учетная запись</div>
      <div className={styles.data__image}>
        <img src={Avatar} alt="ava" />
      </div>
      <div className={styles.data__nick}>
        <div className={styles.data__name}>Фамилия Имя</div>
        <div className={styles.data__status}>Программист-шоколатье</div>
      </div>
      <div className={styles.data__completed}>
        <div className={styles.data__lections}>
          <div className={styles.data__num}>21</div>
          <div className={styles.data__label}>Урок</div>
        </div>
        <div className={styles.data__comments}>
          <div className={styles.data__num}>328</div>
          <div className={styles.data__label}>Комментарий</div>
        </div>
        <div className={styles.data__guids}>
          <div className={styles.data__num}>101</div>
          <div className={styles.data__label}>Гайд</div>
        </div>
      </div>
      <div className={styles.data__lived}>Россия, Донской</div>
      <div className={styles.data__about}>
        Я программист, работаю на заводе, занимаюсь разработкой высонагруженных
        информационных систем, я программист-инженер.
      </div>
    </div>
  );
};

export default UserInfo;
