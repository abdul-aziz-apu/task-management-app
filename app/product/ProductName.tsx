'use client'

import { todo } from 'node:test';
import { useAppSelector } from '../../lib/hooks'

interface Todo {
    id: number,
    text: string,
    completed: Boolean,
    color: string
  }
export default function ProductName() {
    const authState = useAppSelector((state) => state.appReducer.todos);
    console.log(authState)

    return (
            <>
                {
                    <p>{authState[0].text}</p>
                }
            </>
    )

}