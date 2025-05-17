import "./Aside.scss";
import Lope from "../../assets/icons/Lope.svg";
import Hat from "../../assets/icons/Hat.svg";
import Heart from "../../assets/icons/Heart.svg";
import Chat from "../../assets/icons/Chat.svg";
import Man from "../../assets/icons/Man.svg";

const Aside = () => {
  return (
    <aside className="aside">
      <a href="#" className="aside__ava">
        <img src={Man} alt="" />
      </a>
      <ul className="aside__menu">
        <li className="aside__elem"><a className="aside__link" href="#"><img src={Hat} alt="icons" /></a></li>
        <li className="aside__elem"><a className="aside__link" href="#"><img src={Lope} alt="icons" /></a></li>
        <li className="aside__elem"><a className="aside__link" href="#"><img src={Heart} alt="icons" /></a></li>
        <li className="aside__elem"><a className="aside__link" href="#"><img src={Chat} alt="icons" /></a></li>
      </ul>
    </aside>
  );
};

export default Aside;
