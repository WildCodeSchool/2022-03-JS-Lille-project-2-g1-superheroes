import styled from "styled-components";
import marvel from "../../../assets/headerhomepage/marvel2.jpg";
import starwars from "../../../assets/headerhomepage/starwars2.jpg";
import manga from "../../../assets/headerhomepage/Manga.jpg";
import dccomics from "../../../assets/headerhomepage/dccomics.jpg";
import autres from "../../../assets/headerhomepage/autres.jpg";

export default styled.nav`
  padding-top: 2rem;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    li {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border: solid 2px black;
      width: 18vw;
      height: 70vh;
    }
    li:hover {
      filter: sepia(80%);
    }
  }
  .marvel {
    background-image: url(${marvel});
  }
  .starwars {
    background-image: url(${starwars});
  }
  .manga {
    background-image: url(${manga});
  }
  .dccomics {
    background-image: url(${dccomics});
  }
  .autresheros {
    background-image: url(${autres});
  }
`;
