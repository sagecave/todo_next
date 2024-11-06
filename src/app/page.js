import TodoList from "@/componenter/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <main className="w-5/6  mt-11 ">
        <TodoList></TodoList>
      </main>
    </div>
  );
}
