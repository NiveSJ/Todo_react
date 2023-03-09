import { useState } from "react";
import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import './Content.css'


const TableHeader = () => {
  return (
  <thead>
      <tr>
       
          <th>todo</th>
          <th>Action</th>
      </tr>
  </thead>
  );
}
const TableAction = () => {
  return (
  <>
      <button type='button' className='btn btn-danger' >Delete</button>
      <button type='button' className='btn btn-warning'>Edit</button>
  </>
  );
}




let Content =()=>{

  const [todo,SetTodo]=useState("");
  const [inputList,SetInputList]=useState([]);
  
  let saveTodo= (e)=>{
    e.preventDefault();

    const inval=todo;
    if(todo){
    SetInputList((ls)=>[...ls,inval])
    console.log(todo);
    SetTodo("")
  }
    else
    alert("Todo cannot be empty")

    console.log(todo);
  }

  return(
    <div>

      <h1> Task Manager App</h1>
      <div className="mb-3">
     
      <form className="row g-3" onSubmit={saveTodo}>

         <div className="col-auto">
      
         <input type="text" placeholder="Enter todo"  name="todo" value={todo} onChange={(e)=>SetTodo(e.target.value)}/>
         </div>
        <div className="col-auto">
       <button type="submit" className="btn btn-primary mb-3">Add todo</button>
        </div>
     </form>
       
      <br></br>

      


       


<div className="test">
<table className='table table-dark table-striped'>
    <TableHeader />

{

       inputList.map(tolist =>   <div> 

<tbody>
        <tr>
            
            <td>{tolist.todo}</td>
            <td><TableAction /></td>
        </tr>
       
    </tbody>

     
       





       </div>      )
       
       
       
}
</table>
       
     

    </div>


    </div>

    </div>

  );

  


 



}

export default Content;