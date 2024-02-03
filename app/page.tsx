"use client"

import StoreProvider from "./StoreProvider";
import TodoFormComp from "./todo/TodoFormComp";
import ShowTodos from "./todo/ShowTodos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <StoreProvider>
          <TodoFormComp />
          <ShowTodos />
        </StoreProvider>
    </main>
  );
}
