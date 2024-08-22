
import { useState } from "react";
import Link from "next/link";

import { Head } from "./styles";
import { FaUserCircle } from "react-icons/fa";

import Login from "../Login";
import Modal from "../Modal";

export default function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen)
  }

  // const LoginPop = () => {
  //   setLog((prevState) => !prevState)
  // }


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
          <button onClick={handleOpenModal} style={{background: "transparent", color: "red", border: "none", cursor: "pointer"}}>
            <FaUserCircle style={{fontSize: "30px", background: "transparent"}}/>
          </button>
        </div>
        <Modal isOpen={modalIsOpen} />

      </div>
    </Head>
  )
}