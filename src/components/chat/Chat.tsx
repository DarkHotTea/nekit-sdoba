import MainPage from "../mainPage/MainPage";
import styles from "./Chat.module.scss";
import ChatImg from "../../assets/icons/Chat.svg";
import HeartFilled from "../../assets/icons/HeartFilled.svg";
import GetStarted from "../../assets/getStarted.png";
import Avatar from "../../assets/ava.jpg";

const Chat = () => {
  return (
    <MainPage>
      <div className={styles.chat}>
        <div className={styles.chat__head}>
          <div className={styles.chat__title}>Форум</div>
          <div className={styles.chat__profile}>
            <div className={styles.chat__nickname}>Имя</div>
            <div className={styles.chat__ava}>
              <img src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
        <div className={styles.chat__main}>
          <div className={styles.chat__categories}>
            <div className={styles.chat__category}>
              <div className={styles.chat__subtitle}>Избранное</div>
              <div className={styles.chat__list}>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={HeartFilled} alt="Heart" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={HeartFilled} alt="Heart" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={HeartFilled} alt="Heart" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
              </div>
            </div>
            <div className={styles.chat__category}>
              <div className={styles.chat__subtitle}>Популярное</div>
              <div className={styles.chat__list}>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={ChatImg} alt="Chat Image" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={ChatImg} alt="Chat Image" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
                <div className={styles.chat__elem}>
                  <div className={styles.chat__icon}>
                    <img src={ChatImg} alt="Chat Image" />
                  </div>
                  <div className={styles.chat__mark}>
                    <div className={styles.chat__markTitle}>Профессиональная съемка</div>
                    <div className={styles.chat__markSubtitle}>Тонкости работы с проф. апаратурой</div>
                  </div>
                  <div className={styles.chat__rightArrow}><span></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chat__field} style={{ background: `center / 65% no-repeat #3A3A5B url(${GetStarted})`}}></div>
        </div>
      </div>
    </MainPage>
  );
};

export default Chat;
