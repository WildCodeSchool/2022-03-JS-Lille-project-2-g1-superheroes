import styled from "styled-components";
import marvel from "../../../assets/headerhomepage/marvel.jpg";
import starwars from "../../../assets/headerhomepage/starwars.jpg";
import manga from "../../../assets/headerhomepage/manga.jpg";
import dccomics from "../../../assets/headerhomepage/dccomics.jpg";
import autres from "../../../assets/headerhomepage/autres.jpg";

export default styled.nav`
  padding-top: 2rem;
  span {
    display: none;
  }
  img {
    display: none;
  }
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
      height: 80vh;
      filter: none;
    }
    li:hover {
      filter: sepia(80%);
    }
    a:link {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:visited {
      color: white;
      font-weight: bold;
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
    span {
      background-color: #467148;
    }
  }
  .dccomics {
    background-image: url(${dccomics});
  }
  .autresheros {
    background-image: url(${autres});
    span {
      background-color: #735585;
    }
  }

  @media screen and (max-width: 428px) {
    padding: 0;
    ul {
      flex-direction: column;
    }
    a li {
      border: solid 2px black;
      width: 99vw;
      height: 6rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .marvel img {
      display: initial;
      width: 5rem;
      height: 2rem;
    }
    .starwars img {
      display: initial;
      width: 6rem;
      height: 4rem;
    }
    .manga span {
      display: initial;
    }
    .dccomics img {
      display: initial;
      width: 3rem;
      height: 3rem;
    }
    .autresheros span {
      display: initial;
    }
  }
`;
