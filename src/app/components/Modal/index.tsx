import Cadastro from "../Cadastro";
import Login from "../Login";
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
      <div className="image"/>
      <Login />
      <Cadastro />
      {/* <div className="bg" onClick={onClose}>
      </div> */}
    </Log>
  )
}
