import { LucideX } from "lucide-react";
import { useEffect, useState } from "react";

export function Modal({ closeModal, setClientes, selecionado, modo }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (modo === "edit" && selecionado) {
      setNome(selecionado.nome);
      setEmail(selecionado.email);
    }
    console.log(selecionado);
    if (modo === "create") {
      setNome("");
      setEmail("");
      setSenha("");
    }
  }, [modo, selecionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cliente = {
      nome,
      email,
      senha,
    };

    console.log(cliente);
    try {
      let response;

      if (modo === "create") {
        response = await fetch("http://localhost:8080/cliente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        });
        const novoCliente = await response.json();
        setClientes((prev) => [...prev, novoCliente]);
      } else {
        response = await fetch(
          `http://localhost:8080/cliente/${selecionado.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
          },
        );
        const clienteAtualizado = await response.json();

        setClientes((prev) =>
          prev.map((c) => (c.id === selecionado.id ? clienteAtualizado : c)),
        );
      }
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
        <div className="flex justify-end">
          <button
            className="text-white bg-red-500 rounded-md p-2 hover:text-gray-800 text-xl hover:bg-red-700"
            onClick={closeModal}
          >
            <LucideX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              type="text"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
          <label className="block text-sm font-medium mb-1">Senha</label>
          <div>
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              type="password"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {modo === "create" ? "Salvar" : "Atualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
