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
  }
`;
