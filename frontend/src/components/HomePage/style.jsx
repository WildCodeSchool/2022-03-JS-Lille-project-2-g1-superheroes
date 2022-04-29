import styled from "styled-components";
import versus from "../../assets/homepage/VS.jpg";
import heros from "../../assets/homepage/herosoftheday.jpg";

export default styled.main`
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-around;
  margin-left: 13.7vw;
  article {
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cc6060;
    font-size: 32px;
    font-weight: bold;
    -webkit-text-stroke: 1.2px black;
  }
  .jarvis {
    display: none;
  }
  .VS {
    background-image: url(${versus});
    background-size: cover;
    background-repeat: no-repeat;
    border: 8px solid #509d81;
    cursor: pointer;
  }
  .heros {
    background-image: url(${heros});
    background-size: cover;
    background-repeat: no-repeat;
    border: 8px solid #807be4;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin: 0;
    article {
      margin: 0;
      padding: 0;
      width: 30%;
      height: 10vh;
      font-size: 16px;
      color: white;
      text-align: center;
    }
    .VS {
      background-position: center;
    }
    .heros {
      background-position: center;
    }
    .jarvis {
      display: initial;
    }
  }
`;
