import { useEffect, useState } from 'react';
import styles from './Form.module.scss';

import { IoClose } from "react-icons/io5"
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
import Link from 'next/link';

export default function Form() {

  const [form, setForm] = useState(false);

  const toggleClass = () => {
    setForm(!form);
  };

  return (
    <div className={styles.container}>
      <span className={styles.iconClose}>
        <IoClose name="close"></IoClose>
      </span>
      <div style={{width: "500", height: "500"}} className={form ? styles.activeClass : ''}>
        <div className={`${styles.formBoxLogin} ${styles.login}`}>
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
              <p>Não possui conta? <Link href='#' onClick={toggleClass} className={styles.registerLink}>Registrar</Link></p>
            </div>
          </form>
        </div>
      </div>

      <div className={`${styles.formBoxRegister} ${styles.register}`}>
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
            <p>Já possui uma conta? <a href="#" onClick={toggleClass} className={styles.loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}