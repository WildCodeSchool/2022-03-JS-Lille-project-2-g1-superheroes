import styled from "styled-components";

export default styled.section`
  .card {
    background-image: url(${(props) => props.src || ""});
    background-position: center;
    background-size: cover;
    width: 30vh;
    height: 40vh;
    border: 7px solid #000000;
    position: relative;
    border-radius: 1rem;
    .namePower li {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 10px;
      color: black;
      list-style-type: none;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      display: flex;
      padding: 0.1rem;
      margin-top: 0.2rem;
    }
    .namePower {
      position: absolute;
      margin-bottom: 6rem;
      width: 1.8rem;
      left: 0;
      margin-top: 6rem;
    }

    .strengh {
      width: 0.7rem;
      background-color: rgba(255, 255, 255, 0.5);
      margin-left: 0.1rem;
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
      height: 1.7rem;
      margin-left: -0.75rem;
      background-color: #db4040;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
      margin-bottom: 0.5rem;
    }
    .pointPower {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: -0.8rem;
      margin-bottom: 0.3rem;
      background-color: #22ca0c;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
    }
    .pointSpeed {
      width: 1.6rem;
      margin-left: -0.8rem;
      height: 1.7rem;
      background-color: #1165c4;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      opacity: 0.8;
    }

    .capacity {
      display: flex;
      align-items: flex-start;
    }
    .numbers li {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 14px;
      list-style-type: none;
      padding: 0;
      line-height: 1.7rem;
      margin-right: 5rem;
      margin-top: 0.3rem;
    }

    .numbers {
      position: absolute;
      margin-bottom: 7.5rem;
      left: 0;
      margin-top: 6.4rem;
      margin-left: 2rem;
    }

    h1 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 21px;
      border: 1.5mm ridge #b6a87a;
      background: rgba(255, 255, 255, 0.5);
      color: #000000;
      width: 10rem;
      height: 3rem;
      margin: 0.3rem auto;
      text-align: center;
      margin-right: 2.5rem;
    }
    h2 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 15px;
      background: rgb(0, 0, 0);
      background: rgba(255, 255, 255, 0.5);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(177, 15, 15, 1) 35%,
        rgba(13, 25, 201, 1) 100%
      );
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      color: #ffff;
      width: 19%;
      height: 4vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }
    .identity {
      background: rgba(255, 255, 255, 0.5);
      outline: 2mm ridge #bc8f8f;
      display: flex;
      text-align: center;
      flex-direction: column;
      width: 80%;
      height: 4rem;
      color: #000000;
      position: absolute;
      left: 10%;
      bottom: 14px;
      font-size: 12px;
      font-weight: 800;
      box-sizing: content-box;
    }
    .identity p {
      margin-top: 0.7rem;
    }

    @media screen and (max-width: 768px) {
      h2 {
        margin-right: 11.8rem;
        position: absolute;
      }
      h1 {
        margin-right: 1rem;
      }
      .pointPower {
        margin-bottom: 0.4rem;
      }
    }
  }
`;
