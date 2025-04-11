import "./App.css";
import BarraLateral from "./componentes/barraLateral";
import Chat from "./componentes/chat";
import React, { useState } from "react";

function App() {
  const [usuarioAtivo, setUsuarioAtivo] = useState("usuario1");
  const [mensagens, setMensagens] = useState(() => {
    const mensagensSalvas = localStorage.getItem("mensagens");
    return mensagensSalvas ? JSON.parse(mensagensSalvas) : [];
  });

  const alternarUsuario = (usuario) => {
    setUsuarioAtivo(usuario);
  };

  const limparChat = () => {
    setMensagens([]);
    localStorage.clear();
    setUsuarioAtivo("usuario1");
  };

  const enviarMensagem = (mensagem) => {
    const novaMensagem = {
      usuario: usuarioAtivo,
      mensagem,
      data: new Date().toLocaleDateString(),
      horario: new Date().toLocaleTimeString(),
    };
    const novasMensagens = [...mensagens, novaMensagem];
    setMensagens(novasMensagens);
    localStorage.setItem("mensagens", JSON.stringify(novasMensagens));
  };

  return (
    <div className="App">
      <BarraLateral
        usuarioAtivo={usuarioAtivo}
        alternarUsuario={alternarUsuario}
        limparChat={limparChat}
      />
      <Chat
        mensagens={mensagens}
        enviarMensagem={enviarMensagem}
        usuarioAtivo={usuarioAtivo}
      />
    </div>
  );
}

export default App;
