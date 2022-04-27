import styled from "styled-components";

export default styled.div`
  color: white;
  .main_container {
    display: flex;
    justify-content: space-between;
    .filtre {
      background: ${(props) => props.bg};
      height: 50rem;
      margin: 2rem;
      padding: 2rem 4rem;
      color: white;
      text-align: center;
      font-size: 2rem;
      border: black solid 2px;
      position: -webkit-sticky;
      position: sticky;
      top: 2rem;
    }
  }
  .header_container {
    display: flex;
    height: 60vh;

    .logo {
      width: 10vw;
    }
    .image {
      object-fit: cover;
      width: 60vw;
      height: 100%;
    }
    .details {
      margin: 2em;
      text-align: justify;
    }
  }
  .carousel_container {
    padding: auto 0;
  }
`;
