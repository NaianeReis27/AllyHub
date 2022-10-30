import styled, { keyframes} from "styled-components";

const animationToastOn = keyframes`
  0% {
    -webkit-transform: translateX(200px);
            transform: translateX(200px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: ${animationToastOn};
  
  h2{
    text-align: center;
    margin: 15px;
  }

  .gif{
    position: absolute;
    left: 0;
    right:0;
    width: 30%;
    border: 2px solid black;
    background-color: red;
  }
  
  &>div {
    display: flex;
    gap: 30px;
    justify-content: center;

    flex-wrap: wrap;
    max-width: 1900px;
    width: 100%;
    margin: 0 auto;

    section {
      padding: 25px;
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 100%;
      max-width: 600px;
      border-radius: 15px;
      -webkit-box-shadow: 0px 1px 22px 5px rgba(0, 0, 0, 0.13);
      box-shadow: 0px 1px 22px 5px rgba(0, 0, 0, 0.13);
      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
    
    input, select, option{
      padding: 5px;
    }
  }

  button {
    max-width: 300px;
    margin: 0 auto;
    background-color: rgba(0,223,154,1);
    border: none;
    color: #ffffff;
    width: 100%;
    font-weight: 600;
    font-size: 20px;
    padding: 15px;
    border-radius: 15px;
  }

  img {
    width: 300px;
    margin: 50px auto;
  }
`;

export const ImgGif = styled.img`
  display: block;
  height: 100px;
  margin: 25% auto 0 auto;
  width: 100px;   
`;


