import { Cad } from "../Cadastro/styles";
import Form from "../Form";
import { Log } from "../Login/styles";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;

  // const wrapper = document.querySelector('.wrapper') as HTMLElement | null;
  // const loginLink = document.querySelector('.login-link') as HTMLElement | null;
  // const registerLink = document.querySelector('.register-link') as HTMLElement | null;
  // const btnPopup = document.querySelector('.btnLogin-popup') as HTMLElement | null;
  // const iconClose = document.querySelector('.icon-close') as HTMLElement | null;
  
  // if (registerLink) {
  //   registerLink.addEventListener('click', () => {
  //     if (wrapper) {
  //       wrapper.classList.add('active');
  //     }
  //   });
  // }
  
  // if (loginLink) {
  //   loginLink.addEventListener('click', () => {
  //     if (wrapper) {
  //       wrapper.classList.remove('active');
  //     }
  //   });
  // }
  
  // if (btnPopup) {
  //   btnPopup.addEventListener('click', () => {
  //     if (wrapper) {
  //       wrapper.classList.add('active-popup');
  //     }
  //   });
  // }
  
  // if (iconClose) {
  //   iconClose.addEventListener('click', () => {
  //     if (wrapper) {
  //       wrapper.classList.remove('active-popup');
  //     }
  //   });
  // }
  
  // if (wrapper) {
  //   wrapper.classList.add('active');
  // }

  
  
  return (

    <Log>
      <div className="image"/>
      
      <Form />
    </Log>
  )
}
