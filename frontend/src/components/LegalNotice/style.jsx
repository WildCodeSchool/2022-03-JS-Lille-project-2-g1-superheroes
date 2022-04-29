import styled from "styled-components";

export default styled.div`
  height: 100%;
  h1 {
    display: flex;
    justify-content: center;
    color: white;
  }
  p {
    background-color: #2c2525;
    color: white;
    display: flex;
    padding: 5vh;
    text-align: justify;
    line-height: 3vh;
    font-size: 2vh;
  }
  @media screen and (max-width: 768px) {
    p {
      height: 300%;
    }
  }
`;
