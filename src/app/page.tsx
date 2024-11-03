import Image from "next/image";
import Board from "@/modules/KanbanBoard/components/Board/Board";
import "bootstrap-icons/font/bootstrap-icons.css"
import {BoardProvider} from "@/modules/KanbanBoard/context/BoardContext";

export default function Home() {
  return (
    <div className=" bg-gray-300 grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BoardProvider>
          <Board/>
      </BoardProvider>
    </div>
  );
}
