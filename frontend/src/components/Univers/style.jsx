import styled from "styled-components";

export default styled.div`
  color: white;
  .main_container {
    display: flex;
    justify-content: space-between;
    .filtreMobile {
      display: none;
    }
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
    .filtreMobile {
      display: none;
    }

    .logo {
      width: 20vw;
      max-height: 15rem;
      margin: 1rem;
      object-fit: contain;
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
  .card {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: 1.5rem 2rem;
  }
  @media screen and (max-width: 768px) {
    .carousel_container {
      display: none;
    }
    .header_container {
      display: initial;
      .image {
        width: 100vw;
        height: 32.5rem;
        position: absolute;
        margin-top: -45rem;
        opacity: 20%;
      }
      .logo {
        width: 40vw;
        margin: 1rem 0 0 1rem;
      }
      .filtreMobile {
        display: block;
        background: ${(props) => props.bg};
        height: 5rem;
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
    .main_container {
      .filtre {
        display: none;
      }
      .card {
        justify-content: center;
      }
    }
  }
`;
