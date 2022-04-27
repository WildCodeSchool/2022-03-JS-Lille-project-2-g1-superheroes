import styled from "styled-components";

export default styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000;
    width: 14.4rem;
    height: 17rem;
    z-index: 1000;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .border_button {
      background-color: #000000;
      padding-bottom: 0.7rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      button {
        border: none;
        background-color: white;
      }
    }
  }
`;
