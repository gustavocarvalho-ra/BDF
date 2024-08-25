import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Cad } from "../Cadastro/styles";

export default function Form() {

  const wrapper = document.querySelector('.wrapper') as HTMLElement | null;
  const loginLink = document.querySelector('.login-link') as HTMLElement | null;
  const registerLink = document.querySelector('.register-link') as HTMLElement | null;
  const btnPopup = document.querySelector('.btnLogin-popup') as HTMLElement | null;
  const iconClose = document.querySelector('.icon-close') as HTMLElement | null;
  

  const wrapp = () => {

    if (registerLink) {
      registerLink.addEventListener('click', () => {
        if (wrapper) {
          wrapper.classList.add('active');
        }
      });
    }
    
    if (loginLink) {
      loginLink.addEventListener('click', () => {
        if (wrapper) {
          wrapper.classList.remove('active');
        }
      });
    }
    
    if (btnPopup) {
      btnPopup.addEventListener('click', () => {
        if (wrapper) {
          wrapper.classList.add('active-popup');
        }
      });
    }
    
    if (iconClose) {
      iconClose.addEventListener('click', () => {
        if (wrapper) {
          wrapper.classList.remove('active-popup');
        }
      });
    }
    
    if (wrapper) {
      wrapper.classList.add('active');
    }
  }


  return (

    <Cad>

      {/* <div className="wrapper"> */}
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <MdEmail name="mail"></MdEmail>
              </span>
              <input type="e-mail" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <FaLock name="lock-closed"></FaLock>
              </span>
              <input type="password" required />
              <label>Senha</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Lembrar senha
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit" className="btn">
              Entrar
            </button>
            <div className="login-register">
              <p>
                Não possui conta?
                <a href="#" className="register-link">
                  Registrar
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Registre-se</h2>

          <form action="#">
            <div className="input-box">
              <span className="icon">
                <FaUser name="person"></FaUser>
              </span>
              <input type="text" required />
              <label>Nome de usuário</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <MdEmail name="mail"></MdEmail>
              </span>
              <input type="e-mail" required />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <FaLock name="lock-closed"></FaLock>
              </span>
              <input type="password" required />
              <label>Senha</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" required />
                Eu concordo com os <a href="#">termos</a> & <a href="#">condições</a>
              </label>
            </div>

            <button type="submit" className="btn">
              Registrar
            </button>

            <div className="login-register">
              <p>
                Já possui uma conta?
                <a href="#" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      {/* </div> */}
    </Cad>
  )
}
