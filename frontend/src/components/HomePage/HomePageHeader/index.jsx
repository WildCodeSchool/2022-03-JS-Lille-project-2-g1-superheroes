import { Link } from "react-router-dom";
import logomarvel from "../../../assets/logo/logomarvel.png";
import logosw from "../../../assets/logo/logosw.png";
import logodc from "../../../assets/logo/logodc.png";
import SHomePageHeader from "./style";
import Logo from "../../Logo";

export default function HomePageHeader() {
  return (
    <SHomePageHeader>
      <Logo />
      <nav className="imgLink">
        <ul>
          <Link to="/marvel">
            <li className="marvel">
              <img src={logomarvel} alt="logomarvel" />
            </li>
          </Link>
          <Link to="/starwars">
            <li className="starwars">
              <img src={logosw} alt="logosw" />
            </li>
          </Link>
          <Link to="/manga">
            <li className="manga">
              <span>Animé</span>
            </li>
          </Link>
          <Link to="/dccomics">
            <li className="dccomics">
              <img src={logodc} alt="logodc" />
            </li>
          </Link>
          <Link to="/autres">
            <li className="autresheros">
              <span>Autres Héros</span>
            </li>
          </Link>
        </ul>
      </nav>
    </SHomePageHeader>
  );
}
