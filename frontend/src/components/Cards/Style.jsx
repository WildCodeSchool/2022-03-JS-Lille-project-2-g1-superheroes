import styled from "styled-components";

export default styled.div`
font-family: Georgia, "Times New Roman", Times, serif;
color: #000000;
    .card {
      background-image: url(${(props) => props.src || ""});
      background-position: center;
      background-size: cover;
      width: 17rem;
      height: 25rem;
      margin: 1.5rem 2rem;
      border: 7px solid black;
      border-radius: 1rem;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    /* .header-card {
      display: flex;
      color: white;
      justify-content: center;
      margin-top: 0.8rem;
    } */

    .id {
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
      width: 4rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 13rem;
      margin-top: 0.5rem;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 1.4rem;

    }
    
    
    .name {
      display: flex;
      justify-content: center;
      text-align: center;
      margin-left: 4.5rem;
      margin-top: -2.6rem;
      border: 5px ridge #b6a87a;
      background-color: rgba(255, 255, 255, 0.5);
      color: black;
      width: 9rem;
      font-size: 1.2rem;
      font-family: Georgia, "Times New Roman", Times, serif;
      
    }
    
    .capacity {
      font-family: Georgia, "Times New Roman", Times, serif;
      color: black;
      width: 4rem;
      margin-right: 12.5rem;
      height: 8rem;
      margin-bottom: 6rem;
      margin-top: 5rem;
    }

    .namepower {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 0.7rem;
      list-style-type: none;
      writing-mode: vertical-lr;
      border: 0.1rem solid #ffffff7f;
      background-color: rgba(255, 255, 255, 0.5);
      margin-top: 0.3rem;
      margin-right: 6.6rem;
    }
    
    .namePower ul {
      position: absolute;
      width: 1.2rem;
    }

    .point {
     display: flex;
     margin-right: 4rem;
     margin-left: 2rem;
     margin-bottom: 10rem;
     line-height: 2rem;
     margin-top: -2rem;
    }  

    .point ul {
      list-style-type: none;
      padding-top: 2rem;
    } 

    .pointIntelligence  {
      background-color: #db4040;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      margin-top: 0.3rem;
      height: 2.5rem;
      margin-left: -1rem;
      width: 2.5rem;
      padding-left: 0.9rem;
    }
     .pointPower  {
      background-color:  #22ca0c;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      margin-top: 0.22rem;
      height: 2.1rem;
      margin-left: -1rem;
      width: 2.5rem;
      padding-left: 0.9rem;
    }
     .pointSpeed  {
      background-color: #1165c4;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
      margin-top: 0.3rem;
      height: 1.9rem;
      margin-left: -1rem;
      width: 2.5rem;
      padding-left: 0.9rem;
    }


    .identity {
      color: black;
      align-self: flex-end;
      margin-top: -2rem;
      margin-bottom: 2rem;
      margin-right: 2rem;
      background-color: rgba(255, 255, 255, 0.5);
      border: 5px ridge #b6a87a;
      width: 12rem;
    }

    .nameIdentity{
      text-align: center;
    }


    /* .namePower li {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 10px;
      color: black;
      list-style-type: none;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      display: flex;
      padding: 0.1rem;
      margin-top: 0.2rem;
    } */
    /* .namePower {
      position: absolute;
      margin-bottom: 6rem;
      width: 1.8rem;
      left: 0;
      margin-top: 6rem;
    } */

    /* .strengh {
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
      /* display: flex;
      align-items: flex-start; */
    
    /* .numbers li {
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

   

    /* .identity { */
      /* background: rgba(255, 255, 255, 0.5);
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
      box-sizing: content-box; */
    /* }
    .identity p { */
      /* margin-top: 0.7rem; */
    
/* 
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
  } */
}
`;
