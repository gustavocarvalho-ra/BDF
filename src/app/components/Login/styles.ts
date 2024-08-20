import styled from "styled-components";

export const Log = styled.div `
  width: 40vw;
  height: 30vh;
  background: red;

  .main {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;

    h1 {
      font-size: 36px;
      text-align: center;
    }

    .input-box {
      position: relative;
      width: 100%;
      height: 50px;
      margin: 30px 0;
      color: black;
      
      input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, .2);
        outline: none;
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 40px 20px 20px;

        &::placeholder {
          color: #fff;
        }
      }

      .icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
      }
    }

    .esqueceu-senha {
      display: flex;
      justify-content: space-between;
      font-size: 14.5px;
      margin: -15px 0 15px;

      label input {
        accent-color: #fff;
        margin-right: 4px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
      width: 100%;
      height: 45px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    }

    .register-link {
      font-size: 14.5px;
      text-align: center;
      margin: 20px 0 15px;

      p a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }

`