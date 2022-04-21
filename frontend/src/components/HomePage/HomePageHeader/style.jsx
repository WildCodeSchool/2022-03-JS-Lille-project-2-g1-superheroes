import styled from "styled-components";

export default styled.header`
  margin-top: 2vh;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 60vh;
  a img {
    width: 17%;
    object-fit: cover;
    filter: grayscale(80%);
  }
  a img:hover {
    cursor: pointer;
    filter: none;
  }
`;
