import Form from "../Form";
import { Log } from "./styles";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  
  if (!isOpen) return null;

  return (

    <Log>
      <div className="image" style={{pointerEvents: "none"}}/>
      
      <Form />
    </Log>
  )
}
