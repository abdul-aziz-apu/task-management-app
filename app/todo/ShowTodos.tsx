'use client'

import { useAppSelector } from "../../lib/hooks"

export default function ShowTodos () {
    const todos = useAppSelector((state) => state.todos);
    console.log(todos)

    const renderedTodos = todos.map(todo => (
        <article className="post-excerpt" key={todo.id}>
          <h3>{todo.text}</h3>
        </article>
      ))

    return (
        <section className="posts-list">
          <h2>Todos</h2>
          {renderedTodos}
        </section>
      )
}