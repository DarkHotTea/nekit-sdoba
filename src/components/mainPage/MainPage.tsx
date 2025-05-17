import { ReactNode } from "react";
import Aside from "../aside/Aside";
import Lope from "../../assets/icons/Lope.svg";
import styles from "./MainPage.module.scss";

interface Props {
  children: ReactNode;
}

const MainPage = ({children} : Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.main__menu}>
        <Aside />
      </div>
      <nav className={styles.main__searchBar}>
        <a href="#" className={styles.main__searchButton}>
          <img src={Lope} alt="Search" />
        </a>
        <input className={styles.main__searchInput} type="text" placeholder="поиск" />
      </nav>
      <div className={styles.main__content}>{children}</div>
    </main>
  );
};

export default MainPage;
