import styles from "../../page.module.css"
import Link from "next/link";
import { Head } from "./styles";
import { FaUserCircle } from "react-icons/fa";

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

        <input className="inp" type="text" />


        <div className="login" style={{marginLeft: "100px", fontSize: "50px"}}>
          <button style={{background: "transparent", color: "red", border: "none", cursor: "pointer"}}>
            <FaUserCircle style={{fontSize: "30px", background: "transparent"}}/>
          </button>
        </div>

      </div>
    </Head>
  )
}