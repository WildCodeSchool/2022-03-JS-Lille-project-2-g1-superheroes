import styled from "styled-components";

export default styled.div`
  .containerFooter {
    display: flex;
    justify-content: center;
    background-color: #2c2c2c;
    text-decoration: none;
    border-top: 5px solid #2f9ec0;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3vh;
  }
  a {
    text-decoration: none;
    padding: 1rem;
    color: white;
  }
  @media screen and (max-width: 768px) {
    .containerFooter {
    }
  }
`;
