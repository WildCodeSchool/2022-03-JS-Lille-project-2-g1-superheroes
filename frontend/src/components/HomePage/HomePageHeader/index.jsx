import { Link } from "react-router-dom";
import logomarvel from "../../../assets/logo/logomarvel.png";
import logosw from "../../../assets//logo/logosw.png";
import logodc from "../../../assets/logo/logodc.png";
import SHomePageHeader from "./style";

export default function HomePageHeader() {
  return (
    <SHomePageHeader>
      <nav className="imgLink">
        <ul>
          <Link to="/marvel">
            <li className="marvel">
              <>
                <img src={logomarvel} />
              </>
            </li>
          </Link>
          <Link to="/starwars">
            <li className="starwars">
              <img src={logosw} />
            </li>
          </Link>
          <Link to="/manga">
            <li className="manga">
              <span>Animé</span>
            </li>
          </Link>
          <Link to="/dccomics">
            <li className="dccomics">
              <img src={logodc} />
            </li>
          </Link>
          <Link to="/autresheros">
            <li className="autresheros">
              <span>Autres Héros</span>
            </li>
          </Link>
        </ul>
      </nav>
    </SHomePageHeader>
  );
}
