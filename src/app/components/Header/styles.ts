import styled from "styled-components";

export const Head = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: blue;

  .container {
    display: flex;
    gap: 1.5em;
    
    a {
      color: red;
    }
  }
  .inp {
    width: 40em;
    height: 2em;
    border-radius: 6px;
    border: none;
  }
`