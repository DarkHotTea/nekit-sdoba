import MainPage from "../mainPage/MainPage";
import styles from "./profile.module.scss";
import Cover from "../../assets/Viewfinder.png"
import Mute from "../../assets/mute.png"
import UserInfo from "../userInfo/UserInfo";
import Settings from "../../assets/icons/Settings.svg"

const Profile = () => {
  return (
    <MainPage>
      <div className={styles.profile}>
        <div className={styles.profile__about}>
          <a href="/profileSettings" className={styles.settingsLink}><img src={Settings} alt="set up" /></a>
          <UserInfo/>
          <div className={styles.profile__cover}><img src={Cover} alt="cover" /></div>
        </div>
        <div className={styles.works}>
          <div className={styles.works__title}><span>Ваши работы</span></div>
          <div className={styles.works__worksList}>
            <div className={styles.works__work}>
              <div className={styles.works__label}>Bring Sea</div>
              <div className={styles.works__image}><img src={Mute} alt="mute" /></div>
            </div>
            <div className={styles.works__work}>
              <div className={styles.works__label}>Susanna</div>
              <div className={styles.works__image}><img src={Mute} alt="mute" /></div>
            </div>
            <div className={styles.works__work}>
              <div className={styles.works__label}>Mountains</div>
              <div className={styles.works__image}><img src={Mute} alt="mute" /></div>
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
};

export default Profile;
