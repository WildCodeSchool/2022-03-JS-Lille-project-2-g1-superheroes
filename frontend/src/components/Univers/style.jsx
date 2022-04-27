import styled from "styled-components";

export default styled.div`
  color: white;
  height: 100vh;
  .header_container {
    display: flex;
    height: 60vh;
    .logo {
      width: 20%;
    }
    .image {
      object-fit: cover;
      width: 50vw;
      height: 100%;
    }
    p {
      text-align: justify;
      margin: 4vh;
    }
  }
  .carousel_container {
    height: 40vh;
  }
`;
