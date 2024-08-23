import { Cad } from "./styles"

import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";

export default function Cadastro() {
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
  

  return ( 
    <Cad>
      
      <div className="form-box register">

        <h2>Registre-se</h2>

        <form action="#">
          <div className="input-box">
            <span className="icon"><FaUser name="person"></FaUser></span>
            <input type="text" required/>
            <label>Nome de usuário</label>
          </div>

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
            <label><input type="checkbox" required/>Eu concordo com os <a href="#">termos</a> & <a href="#">condições</a></label>
          </div>

          <button type="submit" className="btn">Registrar</button>

          <div className="login-register">
            <p>Já possui uma conta?
              <a href="#" className="login-link">Login</a>
            </p>
          </div>

        </form>
      </div>
    </Cad>
  )
}