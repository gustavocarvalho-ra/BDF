import styles from "../../page.module.css"
import Link from "next/link";
import { Head } from "./styles";

export default function Header() {
  return (
    <Head>
      <h1 style={{color: 'red'}}>Test Header</h1>
      <Link href={"/"}>home</Link>
      <Link href={"/"}>categorias</Link>
      <Link href={"/"}>sobre</Link>
      <Link href={"/"}>home</Link>
      <Link href={"/"}>home</Link>
    </Head>
  )
}