interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;
  
  return (
    <div style={{color: "red"}}>index</div>
  )
}
