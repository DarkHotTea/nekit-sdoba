import MainPage from "../mainPage/MainPage";
import styles from "./Categories.module.scss";
import Mute from "../../assets/mute.png";

const Categories = () => {
  return (
    <MainPage>
      <div className={styles.categories}>
        <h1 className={styles.categories__title}>Категории сборников</h1>
        <div className={styles.categories__main}>
          <h2 className={styles.categories__subtitle}>Популярное</h2>
          <div className={styles.categories__grid}>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
            <a href="#" className={styles.categories__elem}>
              <div className={styles.categories__elemImage}><img src={Mute} alt="Mute" /></div>
              <span className={styles.categories__elemLabel}>Категория</span>
            </a>
          </div>
        </div>
      </div>
    </MainPage>
  );
};

export default Categories;
