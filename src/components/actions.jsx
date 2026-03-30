import { LucideTrash } from "lucide-react";
import { useState } from "react";
import { Modal } from "./modal";

export function Actions({ setClientes, selecionado, setModoModal, modoModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleDelete = async () => {
    if (!selecionado) {
      alert("Selecione um cliente primeiro");
      return;
    }

    try {
      await fetch(`http://localhost:8080/cliente/${selecionado.id}`, {
        method: "DELETE",
      });

      setClientes((prev) => prev.filter((c) => c.id !== selecionado.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Cliente List</h1>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setModoModal("create");
              openModal();
            }}
            className="bg-gray-200 p-2 text-cyan-700 rounded-md flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-300"
          >
            <span className="font-bold text-2xl mr-2">+</span>Cadastrar Cliente
          </button>
          <button
            className="bg-gray-600 p-2 text-white rounded-md flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-300"
            onClick={() => {
              if (!selecionado) {
                alert("Selecione um cliente!");
                return;
              }

              setModoModal("edit");
              openModal();
            }}
          >
            Atualizar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-800 text-white rounded-md p-2 flex items-center justify-center cursor-pointer hover:bg-red-700"
          >
            <LucideTrash className="w-5 h-5 ml-2" />
            Deletar Cliente
          </button>
          {modalIsOpen && (
            <Modal
              key={setModoModal + (selecionado?.id || "")}
              setClientes={setClientes}
              closeModal={closeModal}
              selecionado={selecionado}
              modo={modoModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Actions;
