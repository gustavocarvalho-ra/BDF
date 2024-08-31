import { useEffect } from 'react';
import styles from './Form.module.scss';

import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";

export default function Form() {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.container}`);
    const loginLink = document.querySelector(`.${styles.loginLink}`);
    const registerLink = document.querySelector(`.${styles.registerLink}`);
    const iconClose = document.querySelector(`.${styles.iconClose}`);
  
    const handleRegisterLinkClick = () => {
      wrapper?.classList.add(styles.active);
    };
  
    const handleLoginLinkClick = () => {
      wrapper?.classList.remove(styles.active);
    };
  
    const handleIconCloseClick = () => {
      wrapper?.classList.remove(styles.activePopup);
    };
  
    registerLink?.addEventListener('click', handleRegisterLinkClick);
    loginLink?.addEventListener('click', handleLoginLinkClick);
    iconClose?.addEventListener('click', handleIconCloseClick);
  
    return () => {
      registerLink?.removeEventListener('click', handleRegisterLinkClick);
      loginLink?.removeEventListener('click', handleLoginLinkClick);
      iconClose?.removeEventListener('click', handleIconCloseClick);
    };
  }, []);

  return (
    // <div className={styles.wrapper}>
    <div className={styles.container}>
      {/* <span className={styles.iconClose}>
        <IoClose name="close"></IoClose>
      </span> */}

      <div className={`${styles.formBox} ${styles.login}`}>
        <h2>Login</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <span className={styles.icon}><MdEmail name="mail"></MdEmail></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><FaLock name="lock-closed"></FaLock></span>
            <input type="password" required />
            <label>Senha</label>
          </div>
          <div className={styles.rememberForgot}>
            <label><input type="checkbox" /> Lembrar senha</label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit" className={styles.btn}>Entrar</button>
          <div className={styles.loginRegister}>
            <p>Não possui conta? <a href="#" className={styles.registerLink}>Registrar</a></p>
          </div>
        </form>
      </div>

      <div className={`${styles.formBox} ${styles.register}`}>
        <h2>Registre-se</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <span className={styles.icon}><FaUser name="person"></FaUser></span>
            <input type="text" required />
            <label>Nome de usuário</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><MdEmail name="mail"></MdEmail></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><FaLock name="lock-closed"></FaLock></span>
            <input type="password" required />
            <label>Senha</label>
          </div>
          <div className={styles.rememberForgot}>
            <label><input type="checkbox" required /> Eu concordo com os <a href="#">termos</a> & <a href="#">condições</a></label>
          </div>
          <button type="submit" className={styles.btn}>Registrar</button>
          <div className={styles.loginRegister}>
            <p>Já possui uma conta? <a href="#" className={styles.loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}