import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { v4 as uuidv4 } from 'uuid' ;
import useRef from 'react' ;

function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])
  const [useref, setUseref] = useState(null)

  useState(() => {
    alert("work in progress")
  })

  const handleEdit = () => {
    alert("Edit button clicked")
  }

  const handleDelete = () => {
    alert("Delete button clicked")
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4() , todo, isCompleted: false }])
    setTodo(" ")
    console.log(todos);
  }
  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckBox = (e) => {
    console.log(e.target , e)
    let id = e.target.name ;
    console.log(`The id is ${id}`) ;
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    console.log(`The index is ${index}`) ;
    let newTodos = [...todos] ;
    newTodos[index].isCompleted = !newTodos[index].isCompleted ;
    setTodos([...newTodos]) ;
    //
    // todos.filter()
  }

  return (

    <>
    
      <Navbar />
      <div className="container max-w-xl mx-auto my-5 rounded text-center bg-violet-100  p-2 min-h-[90vh] ">
        <div className="addTodo">
          <h1 className='text-lg font-bold '>Add a Todo</h1>

          <input value={todo} onChange={handleChange} type="text" className="bg-white m-3 w-3/4" />

          <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-3 py-0 text-white rounded-md">Add</button>
        </div>

        <h1 className='text-lg rounded-lg '>Your Todos</h1>

        <div className="todos m-10">

          {todos.map((item, index) => {

            return <div key={index} className="todo flex justify-between my-3">

              <input name = {item.id} onChange={handleCheckBox} type="checkbox" value={item.isCompleted} id = " "/>
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

              <div className="buttons">
                <button onClick={handleEdit} className="bg-violet-800 hover:bg-violet-950 p-3 py-0 text-white rounded mx-1">Edit</button>
                <button onClick={handleDelete} className="bg-violet-800 hover:bg-violet-950 p-3 py-0 text-white rounded mx-1">DELETE</button>
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default App


