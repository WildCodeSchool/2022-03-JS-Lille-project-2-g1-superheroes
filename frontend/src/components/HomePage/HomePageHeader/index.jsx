import SHomePageHeader from "./style";
import marvel from "../../../assets/headerhomepage/marvel.jpg";
import starwars from "../../../assets/headerhomepage/starwars.jpg";
import manga from "../../../assets/headerhomepage/Manga.jpg";
import dccomics from "../../../assets/headerhomepage/dccomics.jpg";
import autres from "../../../assets/headerhomepage/autres.jpg";

export default function HomePageHeader() {
  return (
    <SHomePageHeader>
      <img src={marvel} alt="marvel" />
      <img src={starwars} alt="starwars" />
      <img src={manga} alt="mange " />
      <img src={dccomics} alt="dccomics" />
      <img src={autres} alt="autres" />
    </SHomePageHeader>
  );
}
