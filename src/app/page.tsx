"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Cadastro from "./components/Cadastro";
import { Main } from './styles';

export default function Home() {
  return (
    <>
      <Main>

        <Header />
        <main>
          <Cadastro />
        </main>
      </Main>
    </>
  );
}
