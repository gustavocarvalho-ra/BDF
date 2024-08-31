import { Cad } from "../Cadastro/styles";
import Form from "../Form";
import { Log } from "../Login/styles";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  
  if (!isOpen) return null;

  return (

    <Log>
      <div className="image"/>
      
      <Form />
    </Log>
  )
}
