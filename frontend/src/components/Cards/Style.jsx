import styled from "styled-components";

export default styled.section`
  .card {
    background-image: url(${(props) => props.src || null});
    background-position: center;
    background-size: cover;
    width: 30vh;
    height: 40vh;
    border: 7px solid #000000;
    position: relative;
    border-radius: 1rem;
    .namePower {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 10px;
      color: black;
      list-style-type: none;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      display: flex;
      margin-left: 0.2rem;
    }
    li {
      padding: 0.1rem;
      margin-top: 0.2rem;
    }
    .strengh {
      width: 0.7rem;
      margin-left: 0.1rem;
      background-color: rgba(255, 255, 255, 0.5);
      margin-top: 0.3em;
    }
    .power {
      border: 0.1mm #ffffff7f;
      width: 0.7rem;
      margin-left: 0.1rem;
      background-color: #ffffff7f;
    }
    .speed {
      border: 0.1mm #ffffff7f;
      width: 0.7rem;
      margin-left: 0.1rem;
      background-color: rgba(255, 255, 255, 0.5);
    }

    .pointStrengh {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: -0.5rem;
      background-color: #db4040;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
    }
    .pointPower {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: -0.5rem;
      background-color: #22ca0c;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
    }
    .pointSpeed {
      width: 1.6rem;
      margin-left: -0.5rem;
      height: 1.6rem;
      background-color: #1165c4;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
      margin-bottom: 1rem;
    }

    .capacity {
      display: flex;
      align-items: flex-start;
    }
    .numbers {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 12px;
      list-style-type: none;
      padding: 0;
      margin-top: 2.6rem;
      line-height: 1.7rem;
    }

    h1 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 21px;
      border: 1.5mm ridge #b6a87a;
      background: rgba(255, 255, 255, 0.5);
      color: #000000;
      width: 49%;
      margin: 0.3rem auto;
      text-align: center;
    }
    h2 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 21px;
      background: rgb(0, 0, 0);
      background: rgba(255, 255, 255, 0.5);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(177, 15, 15, 1) 35%,
        rgba(13, 25, 201, 1) 100%
      );
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      color: #000000;
      width: 19%;
      height: 4vh;
      margin-left: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -2.3rem;
    }
    .identity {
      background: rgba(255, 255, 255, 0.5);
      outline: 2mm ridge #bc8f8f;
      display: flex;
      text-align: center;
      flex-direction: column;
      width: 80%;
      color: #000000;
      position: absolute;
      left: 10%;
      bottom: 14px;
      font-size: 12px;
      font-weight: 800;
      box-sizing: content-box;
    }
  }
`;
