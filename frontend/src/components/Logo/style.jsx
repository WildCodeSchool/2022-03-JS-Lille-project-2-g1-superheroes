import styled from "styled-components";

export default styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 46vh;
  z-index: 1;
  h3 {
    color: red;
    background-color: #d3e1d9;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
    font-size: 3.5rem;
    width: 25rem;
    border: black solid 3px;
    padding: 2.5rem 0;
    text-align: center;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    top: 0;
    margin: 0;
    position: static;
    height: 19vh;

    h3 {
      padding: 0;
      width: 20vh;
      font-size: 2rem;
      height: 6vh;
      margin-top: 6vh;
    }
  }
`;
