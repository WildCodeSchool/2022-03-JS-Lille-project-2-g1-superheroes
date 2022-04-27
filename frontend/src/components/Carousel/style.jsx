import styled from "styled-components";

export default styled.section`
  /* Aspect du carousel */
  background-color: ${(props) => props.bg};
  height: 100%;
  display: flex;
  .carousel-container {
    display: flex;
    justify-content: space-around;
    margin: auto 0;
    height: 40vh;
    img {
      padding: 2em 0;
      width: 15%;
      object-fit: cover;
    }
  }

  button {
    border: 0;
    font-size: 15em;
    cursor: pointer;
    color: white;
    background-color: transparent;
  }
`;
