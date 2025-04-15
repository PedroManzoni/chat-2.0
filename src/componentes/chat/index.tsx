import "./chat.css";
import React, { useState, useEffect, useRef } from "react";

interface ChatProps {
  mensagens: { usuario: string; mensagem: string }[];
  enviarMensagem: (mensagem: string) => void;
  usuarioAtivo: string;
}

export default function Chat({ mensagens, enviarMensagem, usuarioAtivo }: ChatProps) {
  const [texto, setTexto] = useState<string>("");
  const chatRef = useRef<HTMLUListElement | null>(null);

  const enviar = () => {
    if (texto.trim()) {
      enviarMensagem(texto);
      setTexto("");
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div className="chatgeral">
      <ul className="chat" ref={chatRef}>
        {mensagens.map((msg, index) => (
          <li
            key={index}
            className={`mensagem ${
              msg.usuario === usuarioAtivo ? "mensagem2" : "mensagem1"
            }`}
          >
            {msg.mensagem}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="texto"
        placeholder="Digite uma mensagem"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && enviar()}
      />
    </div>
  );
}
