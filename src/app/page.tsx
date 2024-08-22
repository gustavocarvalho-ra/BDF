"use client"

import { Main } from './styles';

import Cadastro from "./components/Cadastro";
import Header from "./components/Header";
import Login from "./components/Login";
import Modal from './components/Modal';

export default function Home() {
  return (
    <>
      <Main>

        <Header />
        <main>
          {/* <Cadastro /> */}
          {/* <Login /> */}
          <Modal isOpen={true}/>
        </main>
      </Main>
    </>
  );
}
