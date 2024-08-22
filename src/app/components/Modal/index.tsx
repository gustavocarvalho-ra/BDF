import { Log } from "../Login/styles";
import { FaUser, FaLock } from "react-icons/fa";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;
  
  return (

    <Log>
      <div className="bg" onClick={onClose}>

        <button className="close" style={{zIndex: "20", position: "absolute"}} onClick={onClose}>
          X
        </button>

        <div className="image"/>
        <div className="main">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Nome de Usuário' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Senha' required />
              <FaLock className='icon' />
            </div>

            <div className="esqueceu-senha">
              <label><input type="checkbox" />Salvar a senha</label>
              <a href="#">Esqueceu a senha?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
              <p>Não possui conta? <a href="#">Registrar</a></p>
            </div>
          </form>
        </div>
      </div>
    </Log>
  )
}
