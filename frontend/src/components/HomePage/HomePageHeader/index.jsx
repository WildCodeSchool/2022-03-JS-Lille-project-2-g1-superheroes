import { Link } from "react-router-dom";
import SHomePageHeader from "./style";
import marvel from "../../../assets/headerhomepage/marvel.jpg";
import starwars from "../../../assets/headerhomepage/starwars.jpg";
import manga from "../../../assets/headerhomepage/Manga.jpg";
import dccomics from "../../../assets/headerhomepage/dccomics.jpg";
import autres from "../../../assets/headerhomepage/autres.jpg";

export default function HomePageHeader() {
  return (
    <SHomePageHeader>
      <section className="link">
        <Link to="/marvel">
          <img src={marvel} alt="marvel" />
        </Link>
        <Link to="/starwars">
          <img src={starwars} alt="starwars" />
        </Link>
        <Link to="/manga">
          <img src={manga} alt="manga " />
        </Link>
        <Link to="/dccomics">
          <img src={dccomics} alt="dccomics" />
        </Link>
        <Link to="/autresheros">
          <img src={autres} alt="autresheros" />
        </Link>
      </section>
    </SHomePageHeader>
  );
}
