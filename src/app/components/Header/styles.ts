import styled from "styled-components";

export const Head = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: blue;

  .main {
    display: flex;
    align-items: center;

    .container {
    display: flex;
    gap: 1.5em;
    
      a {
        color: red;
      }
    }

    .inp {
      width: 40em;
      height: 2.2em;
      border-radius: 6px;
      border: none;
      margin-left: 2.8em;
    }
  }
`