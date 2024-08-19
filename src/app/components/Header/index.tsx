import styles from "../../page.module.css"
import Link from "next/link";
import { Head } from "./styles";

export default function Header() {
  return (
    <Head>
      <Link className="title" href={"/"} style={{color: 'red'}}>Test Header</Link>
      <div className="main">

        <div className="container">
          <Link href={"/"}>home</Link>
          <Link href={"/"}>categorias</Link>
          <Link href={"/"}>sobre</Link>
          <Link href={"/"}>filmes</Link>
          <Link href={"/"}>séríes</Link>
        </div>

        <div className="login">
          <button>
            
          </button>
        </div>

        <input className="inp" type="text" />
      </div>
    </Head>
  )
}