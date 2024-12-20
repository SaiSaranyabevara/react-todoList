import { useState } from 'react'
import './App.css'
function App()
{
  let [todoInput,UpdateInput] = useState("")
  let [todoList,updatetodos] = useState(
    [
    {
      id:1,
      task:'learn react'
    },
    {
      id:2,
      task:'learn Angular'
    }

  ]
  )
  let nextid=3
  function addNewTodo(){
    if(todoInput === "")
      alert("Add some task") 
    else{
     let newTodos=[
        ...todoList,{
          id : nextid++,
          task:todoInput
        }
      ]
      updatetodos(newTodos)
      UpdateInput("")
    } 
   
  }

  function deletetodo(id)
  {
    let updatedtodos=todoList.filter(
      (todo)=>{
        return todo.id!==id
      }
    )
    updatetodos(updatedtodos)
  }
  return(
    <div className="container mt-5 w-50">
      <h1 className='text-center '>Todo App using React </h1>
        <div className="input-group">
          <input className="form-control" onChange={
            (e)=>{
              let task=e.target.value;
              UpdateInput(task)
            }
          } type="text" value={todoInput} />
          <button onClick={ ()=>{
            addNewTodo()
          }

          } className="btn btn-primary">Add</button>
        </div>
        <ul className="list-group mt-4">
          {
              todoList.map(
                (todo) => {
                  return(
                    <li className="list-group-item"><p>{todo.task}</p>
                    <button onClick={
                      ()=>{
                        deletetodo(todo.id)
                      }
                    } className="btn">X</button></li>
         
                  )
                }
              )
            }
       </ul>
    </div>
  )
}
export  default App