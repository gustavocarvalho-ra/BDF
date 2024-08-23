"use client"

import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Log } from "./styles";
import Image from "next/image";
import { Cad } from "../Cadastro/styles";

export default function Login() {
  const wrapper = document.querySelector('.wrapper') as HTMLElement;
  const loginLink = document.querySelector('.login-link') as HTMLElement;
  const registerLink = document.querySelector('.register-link') as HTMLElement;
  const btnPopup = document.querySelector('.btnLogin-popup') as HTMLElement;
  const iconClose = document.querySelector('.icon-close') as HTMLElement;
  
  // registerLink.addEventListener('click', () => {
  //   wrapper.classList.add('active');
  // });
  
  // loginLink.addEventListener('click', () => {
  //   wrapper.classList.remove('active');
  // });
  
  // btnPopup.addEventListener('click', () => {
  //   wrapper.classList.add('active-popup');
  // });
  
  // iconClose.addEventListener('click', () => {
  //   wrapper.classList.remove('active-popup');
  // });

  // if (wrapper) {
  //   wrapper.classList.add('active');
  // }

  return(
    <Cad>
      <div className="wrapper">

        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"><MdEmail name="mail"></MdEmail></span>
              <input type="e-mail" required/>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><FaLock name="lock-closed"></FaLock></span>
              <input type="password" required/>
              <label>Senha</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox"/>Lembrar senha</label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit" className="btn">Entrar</button>
            <div className="login-register">
              <p>Não possui conta?
                <a href="#" className="register-link">Registrar</a>
              </p>
            </div>
          </form>     
        </div>
      </div>
    </Cad>
  )
}
