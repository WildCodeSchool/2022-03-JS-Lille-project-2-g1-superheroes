import styled from "styled-components";

export default styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  img {
    margin-top: 2vh;
    margin-right: 2vw;
    width: 15%;
    height: 56vh;
    object-fit: cover;
    filter: grayscale(80%);
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.03);
    filter: none;
  }
`;
