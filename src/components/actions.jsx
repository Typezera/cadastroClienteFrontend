import { LucideTrash } from "lucide-react";

export function Actions() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Cliente List</h1>
        <div className="flex gap-3">
          <button className="bg-gray-200 p-2 text-cyan-700 rounded-md flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-300">
            <span className="font-bold text-2xl mr-2">+</span>Cadastrar Cliente
          </button>
          <button className="bg-red-800 text-white rounded-md p-2 flex items-center justify-center cursor-pointer hover:bg-red-700">
            <LucideTrash className="w-5 h-5 ml-2" />
            Deletar Cliente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actions;
