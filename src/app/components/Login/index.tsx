import { useEffect } from 'react';
import styles from '../styles/Login.module.scss';

export default function Login() {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    const loginLink = document.querySelector(`.${styles.loginLink}`);
    const registerLink = document.querySelector(`.${styles.registerLink}`);
    const iconClose = document.querySelector(`.${styles.iconClose}`);

    registerLink?.addEventListener('click', () => {
      wrapper?.classList.add(styles.active);
    });

    loginLink?.addEventListener('click', () => {
      wrapper?.classList.remove(styles.active);
    });

    iconClose?.addEventListener('click', () => {
      wrapper?.classList.remove(styles.activePopup);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <span className={styles.iconClose}>
        <ion-icon name="close"></ion-icon>
      </span>

      <div className={`${styles.formBox} ${styles.login}`}>
        <h2>Login</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
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
            <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
            <input type="text" required />
            <label>Nome de usuário</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
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