import { Link } from "react-router-dom";
import SHomePageHeader from "./style";

export default function HomePageHeader() {
  return (
    <SHomePageHeader>
      <nav className="imgLink">
        <ul>
          <Link to="/marvel">
            <li className="marvel"> </li>
          </Link>
          <Link to="/starwars">
            <li className="starwars"> </li>
          </Link>
          <Link to="/manga">
            <li className="manga"> </li>
          </Link>
          <Link to="/dccomics">
            <li className="dccomics"> </li>
          </Link>
          <Link to="/autresheros">
            <li className="autresheros"> </li>
          </Link>
        </ul>        
      </nav>
    </SHomePageHeader>
  );
}
