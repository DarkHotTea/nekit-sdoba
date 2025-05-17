import styles from "./CoursesDetail.module.scss";
import MainPage from "../mainPage/MainPage";
import Mute from "../../assets/mute.png";

const CoursesDetail = () => {
  return (
    <MainPage>
      <div className={styles.coursesDetail}>
        <div className={styles.coursesDetail__title}>Техническая часть</div>
        <div className={styles.course}>
          <div className={styles.course__about}>
            <div className={styles.course__heading}>
              <div className={styles.course__headingTitle}>Вы научитесь:</div>
              <ul className={styles.course__skills}>
                <li className={styles.course__skill}>Параметры фотоаппарата</li>
                <li className={styles.course__skill}>
                  Базовые знания для фотосъёмки
                </li>
                <li className={styles.course__skill}>Практика</li>
              </ul>
              <div className={styles.course__time}>
                *время прохождения 30 минут
              </div>
            </div>
            <div className={styles.course__title}>
              Основные настройки камеры
            </div>
          </div>
          <div className={styles.course__preview}>
            <img src={Mute} alt="preview" />
          </div>
          <div className={styles.course__description}>
            <p>
              В фотокамерах, в том числе и некоторых «мыльницах», есть два
              основных режима фотосъемки: автоматический (A/A+) и ручной (M).
              Главное отличие между ними — в режиме Manual все настройки вы
              устанавливаете самостоятельно.
            </p>
            <p>
              Когда вы снимаете в режиме Full auto mode камера выполняет
              практически всю основную работу без участия фотографа. Это удобно
              и быстро, но не всегда дает идеальный результат.
            </p>
            <p>
              Когда настройки глубины кадра, ISO, баланса белого и даже вспышки
              устанавливаются авоматически, итоговый снимок может получиться
              совсем не таким, каким вы его задумывали. Если вы хотите всегда
              получать предсказуемый и хороший результат, сперва нужно научиться
              выставлять экспозицию кадра.
            </p>
          </div>
        </div>
      </div>
    </MainPage>
  );
};

export default CoursesDetail;
