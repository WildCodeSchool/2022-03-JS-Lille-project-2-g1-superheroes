import VS from "../../../src/assets/homepage/VS.jpg";
import HEROS from "../../../src/assets/homepage/herosoftheday.jpg";
import styled from "styled-components";
export default styled.main`
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-around;
  article {
    border: 2px dotted red;
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
  .VS {
    background-image: url(${VS});
    background-size: cover;
    background-repeat: no-repeat;
    border: 8px solid #afffea;
    cursor: pointer;
  }
  .heros {
    background-image: url(${HEROS});
    background-size: cover;
    background-repeat: no-repeat;
    border: 8px solid #807be4;
    cursor: pointer;
  }
`;
