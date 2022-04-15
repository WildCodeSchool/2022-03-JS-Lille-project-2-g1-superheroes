import styled from "styled-components";

export default styled.section`
  /* Aspect du carousel */
  background-color: #000000;
  padding-top: 16px;
  padding-bottom: 16px;

  .carousel-container {
    display: flex;
    justify-content: space-around;
    img {
      width: 20%;
    }

    button {
      border: 0;
      font-size: 5em;
      cursor: pointer;
      color: white;
      background-color: #000000;
    }
  }
`;
