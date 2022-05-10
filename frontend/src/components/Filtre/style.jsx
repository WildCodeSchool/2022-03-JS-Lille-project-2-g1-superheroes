import styled from "styled-components";

export default styled.div`
  .aze {
  }
  .test {
    display: flex;
    padding-bottom: 4rem;
    margin-left: -1rem;
  }
  .strength {
    display: flex;
    justify-content: center;
    margin: 4rem 0.3rem;
    font-size: 1.5rem;
  }
  input {
    margin-left: 0.5rem;
  }
  select {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    label {
      margin: 0.3rem;
    }
    .test {
      padding: 0;
      margin-left: 1.5rem;
    }
  }
`;
