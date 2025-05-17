import styles from "./Courses.module.scss";
import MainPage from "../mainPage/MainPage";
import Mute from "../../assets/mute.png";

const Courses = () => {
  return (
    <MainPage>
      <div className={styles.courses}>
        <div className={styles.courses__heading}>
          <div className={styles.courses__title}>Полный курс</div>
          <div className={styles.courses__slogan}>вдохновляйся сам и вдохновляй других</div>
        </div>
        <div className={styles.courses__list}>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Техническая часть</span></a>
          </div>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Работа с моделью</span></a>
          </div>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Постановка света</span></a>
          </div>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Перспектива</span></a>
          </div>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Композиция</span></a>
          </div>
          <div
            className={styles.courses__elem}
            style={{ backgroundImage: `url(${Mute})` }}
          >
            <a href="/coursesDetail" className={styles.courses__link}><span>Основы обработки фото</span></a>
          </div>
        </div>
      </div>
    </MainPage>
  );
};

export default Courses;
