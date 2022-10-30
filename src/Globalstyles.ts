import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
   margin: 0;
   padding: 0;
   font-family: 'Inter', sans-serif;
   box-sizing: border-box; 
}

body{
    overflow:hidden;
    min-height:100vh;
    background: rgb(0,4,253);
    background: linear-gradient(24deg, rgba(0,4,253,1) 0%, rgba(0,223,154,1) 100%);
}

button{
    cursor: pointer;
    &:hover{
        background-color: rgba(0,223,154,0.5);
    }
}

.error-msn{
      color:red;
      font-size: 12px;
      margin-top: -2px;
      margin-bottom: 5px;
    }
`;

