import MainPage from "../mainPage/MainPage";
import styles from "./Alboms.module.scss";
import Mute from "../../assets/mute.png";
import Pensil from "../../assets/icons/Pensil.svg";
import HeartEmpty from "../../assets/icons/HeartEmpty.svg";

const Alboms = () => {
  return (
    <MainPage>
      <div className={styles.alboms}>
        <div className={styles.alboms__title}>
          <span>Альбомы</span>
        </div>
        <div className={styles.alboms__grid}>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
            
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
          <a href="#" className={styles.alboms__elem}>
            <div className={styles.alboms__elemImage}>
              <img src={Mute} alt="Mute" />
            </div>
            <span className={styles.alboms__elemLabel}>Категория</span>
            <a href="#" className={styles.albums__editLink}><img src={Pensil} alt="penis" /></a>
            <span className={styles.albums__like}><img src={HeartEmpty} alt="heart" /></span>
          </a>
        </div>
      </div>
    </MainPage>
  );
};

export default Alboms;
