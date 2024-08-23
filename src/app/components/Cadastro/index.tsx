import { Cad } from "./styles"

import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";

export default function Cadastro() {
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