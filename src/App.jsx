import Input from "./components/Input";
import React, { useState } from "react";
import Box from "./components/Box";

function App() {

  const [ todo, setTodo] = useState ([])

  const removeTodo = (id) => {
    console.log(id)
    const newTodo = todo.filter(
      (d,index) => {
        if(index !==id){
          return true
        }
        else{
          return false;
        }
      }
    )
    setTodo(newTodo)
  }

  const addTodoHandler = (item) => {
setTodo(
  [
    ...todo,
    {
      item,
      time: new Date().toTimeString()
    }
  ]
)
  }


  return (
    <div className="bg-black h-screen p-3">
     <div className="max-w-[750px] min-h-[550px] rounded shadow-2xl bg-white mx-auto">
      <Input handler={addTodoHandler}/>
      <Box data={todo} removeHandler={removeTodo}/>
      
     </div>
    </div>
  );
}

export default App;
