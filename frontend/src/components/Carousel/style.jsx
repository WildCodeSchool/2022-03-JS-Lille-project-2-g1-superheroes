import styled from "styled-components";

export default styled.section`
  /* Aspect du carousel */
  background-color: ${(props) => props.bg};

  .carousel-container {
    display: flex;
    justify-content: space-around;
    padding-top: 1vh;
    padding-bottom: 1vh;
    img {
      width: 15%;
    }
  }

  button {
    border: 0;
    font-size: 5em;
    cursor: pointer;
    color: white;
    background-color: transparent;
  }
`;
