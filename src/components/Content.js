import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import './Content.css';
import { Form } from "react-bootstrap";


export let Content =()=>{

  const [inputtodo,SetTodo]=useState({todo:"",assignee:"",deadline:"",status:"pending"});
  const [inputList,SetInputList]=useState([]);

// On submit todo value will be copied to the array(inputList)

  
  let saveTodo= (e)=>{
    e.preventDefault();

    const inputvalue=inputtodo;
    //console.log(inputvalue);


    if(inputvalue.todo){
    // Sets input value to array    ref   : https://beta.reactjs.org/learn/updating-objects-in-state
    SetInputList([
      ...inputList, inputvalue
    ]);

   
    SetTodo({todo:"",status:"pending"});  // To clear the field after input
  }
    else
    alert("Todo cannot be empty")

    console.log(inputvalue);
  }

  return(
    <Container >

      <h1 className="header"> Task Manager App</h1>
      <Container >
     
      <form  onSubmit={saveTodo}>

         <Container className="p-3">
          <h3> Create your todo here</h3>
      
         <input type="text" placeholder="Enter todo"  name="inputtodo.todo" value={inputtodo.todo} onChange={(e)=>SetTodo({...inputtodo,todo:e.target.value})}/>
        
         <input type="text" placeholder="Enter Assignee"  name="inputtodo.assignee" value={inputtodo.assignee} onChange={(e)=>SetTodo({...inputtodo,assignee:e.target.value})}/>
       

         <input type="text" placeholder="YYYY-MM-DD"  name="inputtodo.deadline" value={inputtodo.deadline} onChange={(e)=>SetTodo({...inputtodo,deadline:e.target.value})}/>
         
       
         </Container >
       
      

       <Button tyep="submit "variant="primary">Save</Button>{' '}
       
     </form>
       
      <br></br>
 </Container > </Container >

  );

  


 



}

//export default Content,Displaytodo;