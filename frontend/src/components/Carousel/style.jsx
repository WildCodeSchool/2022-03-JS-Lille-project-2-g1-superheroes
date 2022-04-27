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
    img:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 5px #fff;
    }
  }

  button {
    border: 0;
    font-size: 5em;
    cursor: pointer;
    color: white;
    background-color: #000000;
  }
`;
