"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Cadastro from "./components/Cadastro";

export default function Home() {
  return (
    <>
      <Header />
      <h1>test</h1>
      <Cadastro />
    </>
  );
}
