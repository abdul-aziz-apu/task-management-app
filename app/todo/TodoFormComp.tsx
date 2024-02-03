'use client'

import { todo } from 'node:test';
import { useState } from 'react';
import { useAppDispatch } from '../../lib/hooks'

interface Todo {
    id: number,
    text: string,
    completed: Boolean,
    color: string
  }

export default function TodoFormComp() {
    const [todo, setTodo] = useState<string>()
    const [complete, setComplete] = useState<Boolean>(false)
    const [color, setColor] = useState<string>()

  

    const dispatch = useAppDispatch()

    const onSavePostClicked = () => {
        dispatch({ type: 'todos/todoAdded', 
                   payload: {
                    id: 1,
                    text: todo,
                    completed: complete,
                    color: color
                   }
              })
    }



    function handleSubmit(e: any) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target
      console.log(form)

      const formData = new FormData(form);

      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
  
      // You can pass formData as a fetch body directly:
      fetch('https://65ba68c2b4d53c066552d578.mockapi.io/api/v1/taskname', { method: form.method, body: formJson });
  


      console.log(formData);
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        {/* <div className='flex'>
            <label>
            <input name="myInput" defaultValue="Some initial value" />
            </label>
        </div> */}

        <input
          type="text"
          id="text"
          name="text"
          onChange={(event) => setTodo(event.target.value)}
        />

        <input
          type="text"
          id="completed"
          name="completed"
          onClick={(event) => setComplete(event.target)}
        />

        <input
          type="text" 
          id="color"
          name="color" 
          defaultValue="Blue" 
          onChange={(event) => setColor(event.target.value)}
          />


        <button type='button' onClick={onSavePostClicked}>Click</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }


  // <hr />
  // <label>
  // Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
  // </label>
  // <hr />
  // <p>
  // Radio buttons:
  // <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
  // <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
  // <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
  // </p>
  // <hr />