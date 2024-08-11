import styled from "styled-components";

export const Head = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: blue;

  .title {
    font-size: 1.8em;
    text-decoration: none;
  }

  .main {
    display: flex;
    align-items: center;

    .container {
    display: flex;
    gap: 1.5em;
    
      a {
        color: red;
        text-decoration: none;
      }
    }

    .inp {
      width: 37em;
      height: 2.2em;
      border-radius: 6px;
      border: none;
      margin-left: 2.8em;
      padding-left: 1em;
      font-size: .9em;
    }
  }
`