import styles from "./barraLateral.css";
import React, { useState } from "react";

function BarraLateral({ usuarioAtivo, alternarUsuario, limparChat }) {
  return (
    <div className="lateral">
      <button
        className="btn btn1"
        onClick={() => alternarUsuario("usuario1")}
        disabled={usuarioAtivo === "usuario1"}
      >
        Usuário 1
      </button>
      <button
        className="btn btn2"
        onClick={() => alternarUsuario("usuario2")}
        disabled={usuarioAtivo === "usuario2"}
      >
        Usuário 2
      </button>
      <button className=" btn btn3" onClick={limparChat}>
        Limpar Chat
      </button>
    </div>
  );
}

export default BarraLateral;
