import styled from "styled-components";

export default styled.section`
  margin: 0;
  box-sizing: border-box;

  .block {
    height: 100px;
    width: 100px;
    position: fixed;
    bottom: 0;
    right: 0;
    :hover {
      .img1 {
        transform: rotate(90deg);
        transition: transform 1s ease;
      }
      .img2 {
        transform: rotate(360deg);
        transition: transform 1s ease;
      }
    }
    .img1 {
      width: 100%;
      z-index: 1;
    }
    .img2 {
      width: 70%;
      z-index: 2;
      position: absolute;
      left: 15px;
      top: 15px;
    }
  }
  .jarvisActive {
    transform: translateY(-100%);
  }
  .jarvisNav {
    background-image: url({imgJarvis4});
    height: 190px;
    width: 100px;
    transition: 0.3s ease-in;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 20px;
    .img3 {
      width: 90%;
      height: 17%;
      border-radius: 15px;
    }
    input {
      margin-top: 15px;
      width: 90%;
      height: 12%;
      font-size: 12px;
      text-align: center;
    }
    .section-suggestions {
      position: fixed;
      margin-top: 1em;
      margin-right: 240px;
      background-color: #000000;
      width: 9rem;
      max-height: 150px;
      border-top-left-radius: 1em;
      border-bottom-left-radius: 1em;
      overflow-y: auto;
      overflow-x: hidden;
      ul {
        margin-left: 0.5em;
        scrollbar-color: red;
        button {
          background-color: white;
          opacity: 0.7;
          margin: 2px;
          font-size: 80%;
          border-radius: 0.4rem;
        }
        li {
          list-style-type: none;
          color: #000000;
          cursor: pointer;
        }
      }
    }
  }
`;
