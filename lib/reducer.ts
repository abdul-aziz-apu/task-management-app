import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: number,
  text: string,
  completed: Boolean,
  color: string
}

export interface InitialState {
  todos: Array<Todo>,
  filters: {
    status: String,
    colors: String[]
  }
}

const initialState: InitialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true, color: 'green' },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }


  function nextTodoId(todos:Array<Todo>) {
    const maxId = todos.reduce((maxId:number, todo:Todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

  // Use the initialState as a default value
  export default function appReducer(state: InitialState = initialState, action:PayloadAction<Todo>): InitialState {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'todos/todoAdded': {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload.text,
            completed: false,
            color: action.payload.color
          }
        ]
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
    }
  }
